#!/usr/bin/env python3
"""Check the exported HTML rather than source-only metadata declarations.
Usage: python3 scripts/check-seo.py [out-directory]. Standard library only.
"""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, unquote
from xml.etree import ElementTree as ET

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.meta={}; self.links=[]; self.images=[]; self.ids=set(); self.h1=0; self.schemas=[]; self.current=None; self.text=[]
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='meta': self.meta[a.get('property',a.get('name',''))]=a.get('content','')
        if tag=='link': self.links.append(a)
        if tag=='a' and a.get('href'): self.links.append(a)
        if tag=='img': self.images.append(a)
        if tag=='h1': self.h1+=1
        if tag=='script' and a.get('type')=='application/ld+json': self.current=''
    def handle_data(self,data):
        if self.current is not None: self.current+=data
        else: self.text.append(data)
    def handle_endtag(self,tag):
        if tag=='script' and self.current is not None:
            self.schemas.append(json.loads(self.current)); self.current=None

root=Path(sys.argv[1] if len(sys.argv)>1 else 'out')
site='https://runtomax.com'
urls=[e.text for e in ET.parse(root/'sitemap.xml').findall('.//{*}loc')]
errors=[]; pages={}; image_count=0; schema_count=0

def check(ok,message):
    if not ok: errors.append(message)
for url in urls:
    path=urlparse(url).path
    file=root/path.lstrip('/')/'index.html'
    if not file.exists(): errors.append(f'{path}: missing export'); continue
    p=Page(file.read_text()); pages[path]=p
    check(p.h1==1,f'{path}: expected one H1')
    canon=[x['href'] for x in p.links if x.get('rel')=='canonical']
    check(canon==[url],f'{path}: canonical {canon}')
    check(p.meta.get('og:url')==url,f'{path}: social URL {p.meta.get("og:url")}')
    check(bool(p.meta.get('og:title')) and bool(p.meta.get('twitter:title')),f'{path}: missing social title')
    check(bool(p.meta.get('description')),f'{path}: missing description')
    if path not in ('/','/fr/'):
        check(p.meta.get('description')==p.meta.get('og:description')==p.meta.get('twitter:description'),f'{path}: mismatched descriptions')
    for i in p.images:
        image_count+=1
        check(bool(i.get('alt')),f'{path}: empty image alt')
        check(int(i.get('width',0))>0 and int(i.get('height',0))>0,f'{path}: missing image dimensions')
    nodes=[]
    for schema in p.schemas: nodes.extend(schema.get('@graph',[schema])); schema_count+=1
    app=next((n for n in nodes if n.get('@type')=='SoftwareApplication'),{})
    check(any(o.get('price')=='0' for o in app.get('offers',[])),f'{path}: free download offer missing')
    check(app.get('softwareVersion')=='1.3.5',f'{path}: public version missing')
    if path.startswith('/guides/') and path!='/guides/':
        article=next((n for n in nodes if n.get('@type')=='BlogPosting'),{})
        check(article.get('url')==url,f'{path}: missing article URL')
        check(article.get('datePublished') and article.get('dateModified'),f'{path}: missing dates')
        check(p.meta.get('og:type')=='article',f'{path}: wrong social type')
        check(any(n.get('@type')=='BreadcrumbList' for n in nodes),f'{path}: missing breadcrumbs')
        text=' '.join(p.text)
        check('1.3.5' in text and 'By ' in text,f'{path}: missing visible attribution/version')
    for a in p.links:
        href=urlparse(a.get('href',''))
        if href.scheme and (href.scheme not in ('http','https') or href.netloc!='runtomax.com'):continue
        target=unquote(href.path) or path
        if not target.startswith('/'): continue
        dest=root/target.lstrip('/')
        check(dest.is_file() or (dest/'index.html').is_file(),f'{path}: broken local link {target}')
for path,p in pages.items():
    for a in p.links:
        if a.get('hreflang') not in ('en','fr'):continue
        other=urlparse(a['href']).path
        if other in pages:
            check(any(urlparse(b.get('href','')).path==path for b in pages[other].links if b.get('hreflang')),f'{path}: non-reciprocal hreflang')
check(len(urls)==len(set(urls)), 'Duplicate sitemap URLs')
llms=(root/'llms.txt').read_text()
check('No free tier' not in llms and '1.3.5' in llms,'Stale llms facts')
check('Watch → Workouts' in (root/'guides/interval-workouts-apple-watch/index.html').read_text(),'Wrong public interval navigation')
if errors:
    print('\n'.join(errors));sys.exit(1)
print(f'PASS: {len(pages)} pages; canonical/social metadata, internal links, hreflang, {image_count} image dimensions, {schema_count} JSON-LD blocks, guide metadata and release facts.')

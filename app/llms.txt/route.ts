import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { publishedGuides } from "@/app/_lib/guides";
import { SITE_URL } from "@/app/_lib/site";

export const dynamic = "force-static";

export async function GET() {
  const overview = await readFile(join(process.cwd(), "app/_lib/llms-overview.md"), "utf8");
  const links = publishedGuides.map(guide =>
    `- [${guide.title}](${SITE_URL}${guide.path}): ${guide.description}`
  );
  return new Response([
    overview.trimEnd(), "", "## Running guides", "",
    `[Browse the Apple Watch running guides](${SITE_URL}/guides/)`, "", ...links, "",
  ].join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

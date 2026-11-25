import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Where AI agents enter bounties and the best entry wins — scored, ranked, paid in the open.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

if (TAGLINE.length < 1 || TAGLINE.length > 100) {
  throw new Error(`Tagline must be 1-100 characters, got ${TAGLINE.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, TAGLINE, "utf8");
console.log(TAGLINE);
console.log(`Length: ${TAGLINE.length} characters`);
console.log(`Wrote ${OUTPUT_FILE}`);

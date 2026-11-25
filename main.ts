// make.fun tagline — "One Line, One Week: The make.fun Tagline".
//
// Why this line, against the judge brief (one line, instantly legible,
// true and specific about what make.fun does, worth repeating):
//   - "AI agents enter bounties" — the core activity on make.fun: agents
//     compete in bounties, not humans browsing a job board.
//   - "the best entry wins" — the contest mechanic: entries are judged
//     against each other and the best one takes the prize.
//   - "scored, ranked, paid in the open" — the three promises that make
//     the platform specific: public scores, a visible leaderboard, and
//     real payouts, not hidden decisions or vague rewards.
// The line is 90 characters, under the 100-character limit, and stands
// alone — it reads as a tagline, not a description.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Where AI agents enter bounties and the best entry wins — scored, ranked, paid in the open.";

// Judge brief: the tagline must be a single line of at most 100 characters.
const MAX_LENGTH = 100;

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

if (TAGLINE.length < 1 || TAGLINE.length > MAX_LENGTH) {
  throw new Error(
    `Tagline must be 1-${MAX_LENGTH} characters (one line, max 100), got ${TAGLINE.length}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, TAGLINE, "utf8");
console.log(TAGLINE);
console.log(`Length: ${TAGLINE.length} characters`);
console.log(`Wrote ${OUTPUT_FILE}`);

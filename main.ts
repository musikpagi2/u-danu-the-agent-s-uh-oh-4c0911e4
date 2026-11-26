// Entry for make.fun bounty u-danu-the-agent-s-uh-oh-4c0911e4
// "The Agent's Uh-Oh": one word an agent says when it has no idea
// what to do. Writes exactly one word to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "buffering";

// The gate: entry.txt must be UTF-8 text of 1 to 99 characters, not only
// white space, and exactly one word. Fail loudly instead of shipping
// an entry the scorer would refuse.
if (WORD.length < 1 || WORD.length > 99) {
  throw new Error(`entry word must be 1-99 chars, got ${WORD.length}`);
}
if (/\s/.test(WORD) || WORD.trim() !== WORD) {
  throw new Error("entry must be exactly one word, no whitespace attached");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${WORD.length}-char word to ${join(outDir, "entry.txt")}`);

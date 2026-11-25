import { readFileSync, writeFileSync } from "node:fs";

const line1 =
  "A traffic jam is like the school corridor at break time, when every classroom door opens at once and a hundred kids try to squeeze through one narrow doorway, so everyone shuffles forward a step at a time.";
const line2 =
  "It works because it shows too many cars wanting the same narrow road at once, which slows everyone down, but it leaves out traffic lights, crashes and roadworks that also stop cars.";

const text = line1 + "\n" + line2;

if (text.length < 1 || text.length > 400 || text.trim().length === 0) {
  throw new Error(`entry out of gate: ${text.length} characters`);
}

writeFileSync("/output/entry.txt", text, "utf8");

// Read back and verify: exactly two lines, within the 1-400 char gate.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) {
  throw new Error("read-back mismatch: /output/entry.txt does not hold exactly the entry text");
}
if (back.split("\n").length !== 2) {
  throw new Error(`expected exactly 2 lines, got ${back.split("\n").length}`);
}
if (back.length < 1 || back.length > 400 || back.trim().length === 0) {
  throw new Error(`entry out of gate on read-back: ${back.length} characters`);
}
console.log(`wrote ${text.length} characters to /output/entry.txt`);

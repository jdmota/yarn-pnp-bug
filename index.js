const fg = require("fast-glob");

async function main() {
  const entries = await fg([".editorconfig", "**/index.js"], { dot: true });
  console.log(entries);
}

main().catch(err => console.error(err));

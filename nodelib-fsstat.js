const fsStat = require("@nodelib/fs.stat");

fsStat.stat("index.js", (error, stats) => {
  console.log(error, stats);
});

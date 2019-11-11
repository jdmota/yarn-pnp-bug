const fs = require("fs");

fs.stat("index.js", (error, stats) => {
  console.log(error, stats);
});

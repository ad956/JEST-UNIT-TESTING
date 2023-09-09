const fs = require("fs");

function readFileContent(filePath) {
  try {
    const contents = fs.readFileSync(filePath, "utf8");
    return contents;
  } catch (error) {
    return null;
  }
}

console.log(readFileContent("./package.json"));
console.log(readFileContent("./readme.md"));

module.exports = readFileContent;

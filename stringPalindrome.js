const revStr = require("./revStr.js");

function isStrPalindrome(str) {
  return str.toLowerCase() === revStr(str).toLowerCase();
}

function notToBeAddedIntoCoverage() {
  console.log("this function will not be covered by tests");
}

module.exports = isStrPalindrome;

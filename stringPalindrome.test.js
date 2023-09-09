const strPalin = require("./stringPalindrome");

test("Tests wether a string is a palindrome or not", () => {
  expect(strPalin("radar")).toBe(true);
  expect(strPalin("anand")).toBe(false);
});

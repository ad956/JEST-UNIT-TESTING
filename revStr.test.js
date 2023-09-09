const revStr = require("./revStr");

test("Test for reversing a string", () => {
  expect(revStr("abc")).toBe("cba");
});

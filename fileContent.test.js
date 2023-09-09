const fs = require("fs");
const readfileContent = require("./fileContent");

jest.mock("fs");

test("reads file contents correctly", () => {
  const mockFileContents = "Hey i'm here";
  fs.readFileSync.mockReturnValue(mockFileContents);

  const filePath = "test.txt";
  const contents = readfileContent(filePath);

  expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf8");
  expect(contents).toBe(mockFileContents);
});

test("file not found !!!", () => {
  fs.readFileSync.mockImplementation(() => {
    throw new Error("File not found");
  });

  const filePath = "nonexistent.txt";
  const contents = readfileContent(filePath);

  expect(contents).toBeNull();
});

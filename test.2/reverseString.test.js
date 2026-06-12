
const reverseString = require("./reverseString");

test("reverseString last to first", () => {
    expect(reverseString("hello")).toBe("olleh");
});
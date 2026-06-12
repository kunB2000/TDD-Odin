const calculator = require("./calculator");

test("calculator basic operation", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.divide(8, 2)).toBe(4);
});
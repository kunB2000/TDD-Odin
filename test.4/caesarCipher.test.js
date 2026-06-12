const caesarCipher = require("./caesarCipher");

test("caesarCipher type 3", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('abc', 3)).toBe('def');
});
const addTwoNumbers = require("./node");

test("adds 1 + 2 to equal 3", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
});

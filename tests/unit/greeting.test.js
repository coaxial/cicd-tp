const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("fails on purpose to test CI", () => {
    expect(1 + 1).toBe(3);
  });
});

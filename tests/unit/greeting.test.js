const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("return 'Hello stranger!' when no name is provided", () => {
    expect(getGreeting()).toBe("Hello stranger!");
  });

  it("return personalized greeting when name is provided", () => {
    expect(getGreeting("John")).toBe("Hello John!");
  });
});

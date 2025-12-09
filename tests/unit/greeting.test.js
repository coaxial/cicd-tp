const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message when called without name", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns personalized greeting when called with a name", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
    expect(getGreeting("Bob")).toBe("Hello world! From Bob");
  });

  it("returns base greeting for empty name", () => {
    expect(getGreeting("")).toBe("Hello world!");
  });

  it("returns base greeting for falsy values", () => {
    expect(getGreeting(null)).toBe("Hello world!");
    expect(getGreeting(undefined)).toBe("Hello world!");
    expect(getGreeting(0)).toBe("Hello world!");
    expect(getGreeting(false)).toBe("Hello world!");
  });

  it("converts non-string names to string", () => {
    expect(getGreeting(42)).toBe("Hello world! From 42");
    expect(getGreeting({})).toBe("Hello world! From [object Object]");
    expect(getGreeting([])).toBe("Hello world! From ");
    expect(getGreeting(["Alice","Bob"])).toBe("Hello world! From Alice,Bob");
    expect(getGreeting(NaN)).toBe("Hello world!");
  });

  it("handles whitespace-only names", () => {
    expect(getGreeting("   ")).toBe("Hello world!");
    expect(getGreeting("\t")).toBe("Hello world!");
    expect(getGreeting("\n")).toBe("Hello world!");
  });

  it("handles extremely long names", () => {
    const longName = "A".repeat(1000);
    expect(getGreeting(longName)).toBe(`Hello world! From ${longName}`);
  });
});

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

  it("returns base greeting only for undefined/null", () => {
    expect(getGreeting(null)).toBe("Hello world!");
    expect(getGreeting(undefined)).toBe("Hello world!");
    // Truthy values like 0, false are considered valid names
    expect(getGreeting(0)).toBe("Hello world! From 0");
    expect(getGreeting(false)).toBe("Hello world! From false");
  });

  it("converts non-string names to string", () => {
    expect(getGreeting(42)).toBe("Hello world! From 42");
    expect(getGreeting({})).toBe("Hello world! From [object Object]");
    expect(getGreeting([])).toBe("Hello world!");
    expect(getGreeting(["Alice","Bob"])).toBe("Hello world! From Alice,Bob");
    expect(getGreeting(NaN)).toBe("Hello world! From NaN");
    expect(getGreeting()).toBe("Hello world!"); // pas de paramètre = undefined
  });

  it("handles whitespace-only names", () => {
    expect(getGreeting("   ")).toBe("Hello world!");
    expect(getGreeting("\t")).toBe("Hello world!");
    expect(getGreeting("\n")).toBe("Hello world!");
    expect(getGreeting("  \t\n  ")).toBe("Hello world!");
  });

  it("handles extremely long names", () => {
    const longName = "A".repeat(1000);
    expect(getGreeting(longName)).toBe(`Hello world! From ${longName}`);
  });
});

describe("Trigger Grafana alarms", () => {
  it.todo("raises the threshold of skipped tests count");

  it("just passes", () => {
    expect(true).toBe(true);
  });

  it("raises the execution time", async () => {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

    expect(true).toBe(true);
  });
});

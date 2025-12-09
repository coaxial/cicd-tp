const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return 'Hello' when no name is provided", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello");
  });

  it("should return 'Hello Alice' when name is provided", async () => {
    const res = await request(app).get("/hello/Alice");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Alice");
  });
});

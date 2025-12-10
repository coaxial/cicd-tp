const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should handle name parameter with special characters", async () => {
    const specialNames = ["Jérôme", "Test%20Name", "<script>", "O'Neil"];
    for (const name of specialNames) {
      const res = await request(app).get(`/hello?name=${encodeURIComponent(name)}`);
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(`Hello world! From ${name}`);
    }
  });

  it("should return 404 for unknown routes", async () => {
    const res = await request(app).get("/invalid");
    expect(res.statusCode).toBe(404);
  });

  it("should return 405 for non-GET methods", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(405);
  });
});

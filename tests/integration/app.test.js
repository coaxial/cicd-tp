const request = require("supertest");
const app = require("../../src/server");

describe("API Integration Tests", () => {
  describe("GET /hello", () => {
    it("should return greeting with default stranger name", async () => {
      const res = await request(app).get("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello stranger!");
    });
  });

  describe("POST /hello", () => {
    it("should return personalized greeting with provided name", async () => {
      const res = await request(app)
        .post("/hello")
        .send({ name: "Alice" });
        
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello Alice!");
    });

    it("should return default greeting when no name is provided", async () => {
      const res = await request(app).post("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello stranger!");
    });
  });
});

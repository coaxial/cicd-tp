const request = require("supertest");
const app = require("../../src/server");

describe("Integration tests for server routes", () => {
  describe("GET /hello", () => {
    it("should return Hello world when no name is provided", async () => {
      const res = await request(app).get("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });

    it("should return greeting with name when name is provided", async () => {
      const res = await request(app).get("/hello/John");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world! From John");
    });

    it("should handle special characters in name", async () => {
      const res = await request(app).get("/hello/Jean-Pierre");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world! From Jean-Pierre");
    });

    it("should handle empty string as name", async () => {
      const res = await request(app).get("/hello/");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });
  });

  describe("POST /hello", () => {
    it("should return greeting with name from header", async () => {
      const res = await request(app)
        .post("/hello")
        .set("x-name", "Alice");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world! From Alice");
    });

    it("should return Hello world when no x-name header is provided", async () => {
      const res = await request(app).post("/hello");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });

    it("should handle empty string in x-name header", async () => {
      const res = await request(app)
        .post("/hello")
        .set("x-name", "");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });

    it("should handle special characters in x-name header", async () => {
      const res = await request(app)
        .post("/hello")
        .set("x-name", "María José");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world! From María José");
    });
  });

  describe("Error handling", () => {
    it("should return 404 for non-existent routes", async () => {
      const res = await request(app).get("/non-existent");
      expect(res.statusCode).toBe(404);
    });

    it("should handle malformed requests gracefully", async () => {
      const res = await request(app).get("/hello?invalid=true");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe("Hello world!");
    });
  });
});

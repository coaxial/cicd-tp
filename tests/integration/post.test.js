const request = require("supertest");
const app = require("../../src/server");

describe("POST /hello", () => {
  it("should return 'Hello Alice' when x-name header is provided", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Alice");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Alice");
  });

  it("should return 'Hello' when x-name header is missing", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello");
  });

  it("should return 'Hello' when x-name header is empty", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello");
  });

  it("should return 'Hello John@Doe' when x-name header contains special characters", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "John@Doe");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello John@Doe");
  });

  it("should return 'Hello Jöhn Döe' when x-name header contains non-ASCII characters", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Jöhn Döe");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Jöhn Döe");
  });
});

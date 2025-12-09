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

  it("should return 'Hello John Doe' for a name with spaces", async () => {
    const res = await request(app).get("/hello/John%20Doe");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello John Doe");
  });

  it("should return 'Hello John@Doe' for a name with special characters", async () => {
    const res = await request(app).get("/hello/John@Doe");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello John@Doe");
  });

  it("should return 'Hello John123' for a name with numbers", async () => {
    const res = await request(app).get("/hello/John123");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello John123");
  });

  it("should return 'Hello Jöhn Döe' for a name with non-ASCII characters", async () => {
    const res = await request(app).get("/hello/Jöhn%20Döe");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello Jöhn Döe");
  });

  it("should return 'Hello JOHN' for a name in uppercase", async () => {
    const res = await request(app).get("/hello/JOHN");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello JOHN");
  });

  it("should return 'Hello' for an empty name (trailing slash)", async () => {
    const res = await request(app).get("/hello/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello");
  });

  it("should return 'Hello' for a very long name", async () => {
    const longName = "a".repeat(100);
    const res = await request(app).get(`/hello/${longName}`);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(`Hello ${longName}`);
  });
});

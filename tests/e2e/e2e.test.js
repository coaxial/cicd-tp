const axios = require("axios");
const app = require("../../src/server");
let server;
let baseURL;

beforeAll((done) => {
  server = app.listen(0, () => {
    const { port } = server.address();
    baseURL = `http://127.0.0.1:${port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("E2E tests for all routes", () => {
  describe("GET /hello", () => {
    it("responds with Hello world when no name is provided", async () => {
      const res = await axios.get(`${baseURL}/hello`);
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world!");
    });

    it("responds with greeting including name when name is provided", async () => {
      const res = await axios.get(`${baseURL}/hello/Alice`);
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From Alice");
    });

    it("handles special characters in name parameter", async () => {
      const res = await axios.get(`${baseURL}/hello/Jean-Pierre`);
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From Jean-Pierre");
    });
  });

  describe("POST /hello", () => {
    it("responds with Hello world when no x-name header is provided", async () => {
      const res = await axios.post(`${baseURL}/hello`);
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world!");
    });

    it("responds with greeting including name from x-name header", async () => {
      const res = await axios.post(`${baseURL}/hello`, null, {
        headers: {
          "x-name": "Bob"
        }
      });
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From Bob");
    });

    it("handles special characters in x-name header", async () => {
      const res = await axios.post(`${baseURL}/hello`, null, {
        headers: {
          "x-name": "María José"
        }
      });
      expect(res.status).toBe(200);
      expect(res.data).toBe("Hello world! From María José");
    });
  });

  describe("Error handling", () => {
    it("returns 404 for non-existent routes", async () => {
      try {
        await axios.get(`${baseURL}/non-existent`);
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });
  });
});

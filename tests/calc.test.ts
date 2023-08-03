import request from "supertest";

const BASE_URL = "http://localhost:3001";
const ENDPOINT = '/api/calc';

describe("Calculator API", () => {
  it("should return the correct result when adding two numbers", async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .query({ term1: 1, term2: 1, operator: "add" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      term1: 1,
      term2: 1,
      operator: "add",
      result: 2,
    });
  });

  it("should return the correct result when subtracting two numbers", async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .query({ term1: 10, term2: 3, operator: "subtract" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      term1: 10,
      term2: 3,
      operator: "subtract",
      result: 7,
    });
  });

  it("should return the correct result when multiplying two numbers", async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .query({ term1: 3, term2: 4, operator: "multiply" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      term1: 3,
      term2: 4,
      operator: "multiply",
      result: 12,
    });
  });

  it("should return the correct result when dividing two numbers", async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .query({ term1: 10, term2: 2, operator: "divide" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      term1: 10,
      term2: 2,
      operator: "divide",
      result: 5,
    });
  });

  it("should return an error for invalid terms", async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .query({ term1: "a", term2: 2, operator: "divide" });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Invalid terms. Both term1 and term2 should be numbers.",
    });
  });

  it("should return an error for an invalid operator", async () => {
    const response = await request(BASE_URL)
      .get(ENDPOINT)
      .query({ term1: 10, term2: 2, operator: "invalid" });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Invalid operator. Supported operators are +, -, *, and /.",
    });
  });
});

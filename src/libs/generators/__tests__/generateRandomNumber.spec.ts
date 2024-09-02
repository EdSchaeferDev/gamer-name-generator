import generateRandomNumberInRange from "../generateRandomNumber";
import { test, expect } from "bun:test";

test("should return a number", () => {
  const result = generateRandomNumberInRange(10, 20);
  expect(typeof result).toBe("number");
  expect(result).toBeGreaterThanOrEqual(10);
  expect(result).toBeLessThanOrEqual(20);
});
test("should return a number with 3 digits", () => {
  const result = generateRandomNumberInRange(10, 20, 3);
  expect(result.toString().length).toBe(3);
});
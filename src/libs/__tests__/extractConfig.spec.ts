import { describe, test, expect } from "bun:test";
import extractConfig from "../extractConfig";

test("should return the same config object", () => {
  const config = { range: { min: 1, max: 2 }, numbers: { numDigits: 1 }, adj: "adj", noun: "noun" };
  const result = extractConfig(config);
  expect(result).toStrictEqual(config);
});
test('should return default config', () => {
  const result = extractConfig({});
  expect(result).toEqual({range: {min: 10, max: 30}, numbers: {numDigits: 3}, adj: '', noun: ''});
});

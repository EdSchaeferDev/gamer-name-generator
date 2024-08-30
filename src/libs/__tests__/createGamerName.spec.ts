import { describe, test, expect } from 'bun:test';
import createGamerName from '../createGamerName';

test('should return a string', () => {
  const result = createGamerName();
  expect(typeof result).toBe('string');
});
test('should return a string with min length of 10', () => {
  const result = createGamerName();
  expect(result.length).toBeGreaterThanOrEqual(10);
});
test('should return a string with max length of 20', () => {
  const result = createGamerName();
  expect(result.length).toBeLessThanOrEqual(30);
});
test('should return a string with length between given range', () => {
  const range = { min: 20, max: 21 };
  const result = createGamerName({range});
  expect(result.length).toBeGreaterThanOrEqual(range.min);
  expect(result.length).toBeLessThanOrEqual(range.max);
});
test('should returna string with a number at the end', () => {
  const result = createGamerName();
  expect(result).toMatch(/[0-9]$/);
})
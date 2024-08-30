import generateAdjective from '../generateAdjective';
import { test, expect } from 'bun:test';
import adjectives from '../../constants/adjectives.json';

test('should return the given adjective', () => {
  const result = generateAdjective('awesome', 7);
  expect(result).toBe('awesome');
});
test('should return a random adjective', () => {
  const result = generateAdjective('', 7);
  expect(adjectives).toContain(result);
});
test('should return an adjective with length less than or equal to the given length', () => {
  const result = generateAdjective('', 7);
  expect(result.length).toBeLessThanOrEqual(7);
});
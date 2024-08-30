import generateNoun from '../generateNoun';
import nouns from '../../constants/nouns.json';
import { test, expect } from 'bun:test';

test('should return the given noun', () => {
  const result = generateNoun('awesome', 7, 10);
  expect(result).toBe('awesome');
});
test('should return a random noun', () => {
  const result = generateNoun('', 7, 10);
  expect(nouns).toContain(result);
});
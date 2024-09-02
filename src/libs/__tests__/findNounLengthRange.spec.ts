import { test, expect } from 'bun:test';
import findNounLengthRange from '../findNounLengthRange';

test('should return expected range', () => {
    const min = 15
    const max = 25
    const adjLength = 7.5
    const result = findNounLengthRange(min, max, adjLength, 3);
    expect(result).toStrictEqual({nounMaxLength: 14.5, nounMinLength: 4.5 });
});
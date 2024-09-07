import { test, expect } from 'bun:test'
import validateConfig from '../validateConfig';
import { GamerNameConfig } from '../../extractConfig';

test('should return true for valid config', () => {
    const config: GamerNameConfig = {
        range: {
            min: 1,
            max: 25,
        },
        numbers: {
            numDigits: 0,
        },
        adj: 'Fancy',
        noun: 'Panda',
    };
    expect(validateConfig(config).hasError).toBeFalse();
});

test('should return false for 0 range', () => {
    const config: GamerNameConfig = {
        range: {
            min: 10,
            max: 10
        },
        numbers: {
            numDigits: 0
        },
        adj: '',
        noun: '',
    };
    const validationResult = validateConfig(config);
    expect(validationResult.hasError).toBeTrue();
    expect(validationResult.errors.range).toBe('Min and max cannot be the same')
});

test('should return false for negative range', () => {
    const config: GamerNameConfig = {
        range: {
            min: 10,
            max: 5,
        },
        numbers: {
            numDigits: 3
        },
        adj: '',
        noun: '',
    }
    const validationResult = validateConfig(config);
    expect(validationResult.hasError).toBeTrue();
    expect(validationResult.errors.range).toBe('Min cannot be larger than max');
});

test('should return false for negative range values', () => {
    const config: GamerNameConfig = {
        range: {
            min: -2,
            max: 5,
        },
        numbers: {
            numDigits: 3
        },
        adj: '',
        noun: '',
    }
    let validationResult = validateConfig(config);
    expect(validationResult.hasError).toBeTrue();
    expect(validationResult.errors.range).toBe('Range values cannot be negative');

    config.range.min = 5;
    config.range.max = -2;
    validationResult = validateConfig(config);
    expect(validationResult.hasError).toBeTrue();
    expect(validationResult.errors.range).toBe('Range values cannot be negative');
})
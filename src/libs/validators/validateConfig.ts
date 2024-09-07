import { GamerNameInputConfig } from "../createGamerName";
import { GamerNameConfig } from "../extractConfig";

interface IValidator {
    validate(config: GamerNameConfig): string;
}

class RangeValidator implements IValidator {
    validate(config: GamerNameConfig): string {
        const { range: { min, max } } = config;
        if (min < 0 || max < 0) return 'Range values cannot be negative';
        if (min > max) return 'Min cannot be larger than max';
        if (min === max) return 'Min and max cannot be the same';
        return '';
    };
}

class NumberValidator implements IValidator {
    validate(config: GamerNameConfig): string {
        const { numbers, range: { min, max } } = config;
        if (numbers.numDigits < 0) return 'numDigits cannot be negative';
        if (numbers.numDigits >= max - 5) return 'A gamer name cannot be only numbers';
        return '';
    }
}

class AdjValidator implements IValidator {
    validate(config: GamerNameConfig): string {
        return '';
    }
}

class NounValidator implements IValidator {
    validate(config: GamerNameConfig): string {
        return '';
    }
}

const validationMap: Record<string, IValidator> = {
    range: new RangeValidator(),
    numbers: new NumberValidator(),
    adj: new AdjValidator(),
    noun: new NounValidator(),
}

const validateConfig = (config: GamerNameConfig) => {
    const keys = Object.keys(config);
    let errors: Record<string, string> = {};
    keys.forEach((key) => {
        const validator = validationMap[key];
        const result = validator.validate(config);
        if (result.length) {
            errors[key] = result;
        }
    });
    const hasError = Object.keys(errors).length > 0;
    return { hasError, errors };
}

export default validateConfig;
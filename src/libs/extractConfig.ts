import { GamerNameInputConfig } from "./createGamerName";

interface GamerNameConfig {
  range: {
    min: number;
    max: number;
  };
  numbers: {
    numDigits: number;
  };
  adj: string;
  noun: string;
}
export default function extractConfig(config: GamerNameInputConfig): GamerNameConfig {
  return {
    range: {
      min: config.range?.min || 10,
      max: config.range?.max || 30,
    },
    numbers: {
      numDigits: config.numbers?.numDigits || 3,
    },
    adj: config.adj || '',
    noun: config.noun || '',
  };
}
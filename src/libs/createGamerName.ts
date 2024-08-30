import extractConfig from "./extractConfig";
import generateAdjective from "./generators/generateAdjective";
import generateNoun from "./generators/generateNoun";
import generateRandomNumberInRange from "./generators/generateRandomNumber";

export interface GamerNameInputConfig {
  range?: {
    min?: number;
    max?: number;
  };
  numbers?: {
    numDigits?: number;
  };
  adj?: string;
  noun?: string;
}

export default function createGamerName(config: GamerNameInputConfig = {}): string {
  const finalConfig = extractConfig(config);
  const { min, max } = finalConfig.range;
  const { numDigits } = finalConfig.numbers;
  const adjLength = min / 2;
  const adj = generateAdjective(finalConfig.adj, adjLength);
  const nounMinLenth = min - adjLength - numDigits;
  const nounMaxLength = max - adjLength - numDigits;
  const noun = generateNoun(finalConfig.noun, nounMinLenth, nounMaxLength);
  let result = adj + noun + generateRandomNumberInRange(0, 999, numDigits);
  if (result.length > max) {
    result = result.slice(0, max);
  }
  if (result.length < min) {
    result += generateRandomNumberInRange(0, 999, min - result.length);
  }
  return result;
};
import extractConfig from "./extractConfig";
import generateAdjective from "./generators/generateAdjective";
import generateNoun from "./generators/generateNoun";
import generateRandomNumberInRange from "./generators/generateRandomNumber";
import findNounLengthRange from './findNounLengthRange';
import validateConfig from "./validators/validateConfig";

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
  const validationResult = validateConfig(finalConfig);
  if (validationResult.hasError) {
    const allErrors = Object.values(validationResult.errors).reduce((prev, curr, index) => {
      prev += `${curr}${index === Object.values(validationResult.errors).length - 1 ? '' : ', '}`
      return prev;
    }, '');
    return allErrors;
  }
  const { adj, noun, range: {min, max}, numbers: { numDigits }} = finalConfig;

  // get adjective
  const adjLength = min / 2;
  const finalAdj = generateAdjective(adj, adjLength);
  // get noun within the length parameters provided
  const { nounMinLength, nounMaxLength } = findNounLengthRange(min, max, adjLength, numDigits);
  const finalNoun = generateNoun(noun, nounMinLength, nounMaxLength);
  // string it all together with a number to make our gamer name
  let result = `${finalAdj}${finalNoun}${generateRandomNumberInRange(0, 999, numDigits)}`;
  // make sure we're within the range of length provided
  while (result.length > max || result.length < min) {
    if (result.length > max) {
      result = result.slice(0, max - 1);
    }
    if (result.length < min) {
      const maxlenleft = min - result.length;
      let maxNum = 999;
      if (maxlenleft < 3) {
        let num = '';
        for (let i = 0; i < maxlenleft; i++) {
          num += '9'
        };
        maxNum = +num;
      }
      result += generateRandomNumberInRange(0, 999, min - result.length);
    }
  }
  return result;
};
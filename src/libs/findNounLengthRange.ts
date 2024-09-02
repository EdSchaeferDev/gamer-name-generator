
const findNounLengthRange = (
  min: number,
  max: number,
  adjLength: number,
  numDigits: number
) : {
    nounMinLength: number,
    nounMaxLength: number 
  } => {
    const nounMinLength = min - adjLength - numDigits;
    const nounMaxLength = max - adjLength - numDigits;
    return { nounMinLength, nounMaxLength };
}

export default findNounLengthRange;
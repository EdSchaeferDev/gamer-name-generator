const generateRandomNumberInRange = (min: number, max: number, numDigits?: number): string | number => {
  const baseNum = Math.floor(Math.random() * (max - min + 1)) + min;
  const numDigitsInBaseNum = baseNum.toString().length;
  if (numDigitsInBaseNum === numDigits || !numDigits) {
    return baseNum;
  }
  const diff = numDigits - numDigitsInBaseNum;
  let final = '';
  for (let i = 0; i < diff; i++) {
    final += '0';
  }
  final += baseNum;
  return final;
}

export default generateRandomNumberInRange;
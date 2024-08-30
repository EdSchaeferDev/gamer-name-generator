import nouns from '../constants/nouns.json';

export default function generateNoun(nounInput: string, minLength: number, maxLength: number) {
  if (nounInput?.length > 0) return nounInput;
  const validNouns = nouns.filter((noun) => noun.length >= minLength && noun.length <= maxLength);
  return validNouns[Math.floor(Math.random() * validNouns.length)];
}
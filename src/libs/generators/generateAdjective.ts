import adjectives from '../constants/adjectives.json';

export default function generateAdjective(adjInput: string, length: number) {
  if (adjInput.length > 0) return adjInput;
  const validAdjectives = adjectives.filter((adj) => adj.length <= length);
  return validAdjectives[Math.floor(Math.random() * validAdjectives.length)];
}
const characters = [
  { name: 'мечник', health: 10, expected: 'critical' },
  { name: 'маг', health: 100, expected: 'healthy' },
  { name: 'лучник', health: 80, expected: 'healthy' },
  { name: 'воин', health: 45, expected: 'wounded' },
];

export const sortedCharacters = characters.sort((a, b) => b.health - a.health);

export default function Character(characteristics) {
  if (characteristics.health < 15) {
    return 'critical';
  }
  if (characteristics.health > 15 && characteristics.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}

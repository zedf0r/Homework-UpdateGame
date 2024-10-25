import Character, { sortedCharacters } from '../js/hero';

test.each(sortedCharacters)('testing heros health with %s status and %i health', ({ name, health, expected }) => {
  const result = Character({ name, health });
  expect(result).toBe(expected);
});

import Character from '../js/hero';

test('Health hero is equal healthy', () => {
  const result = Character({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test.each(
  [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
)('testing heros health with %s status and %i health', ({ name, health, expected }) => {
  const result = Character({ name, health });
  expect(result).toBe(expected);
});

test('Health hero is equal wounded', () => {
  const result = Character({ name: 'Воин', health: 45 });

  expect(result).toBe('wounded');
});

test('Health hero is equal critical', () => {
  const result = Character({ name: 'Замок', health: 10 });

  expect(result).toBe('critical');
});

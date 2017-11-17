// @flow
import GameOfLife from '../src/game-of-life';

test('first', () => {
  const Game = new GameOfLife();
  expect(Game.start().some(x => x)).toBe(true);
});

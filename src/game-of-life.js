// @flow

class GameOfLife {
  constructor() {}
  start(): Array<number> {
    const test = [1, 2, 3, 4, 5];
    return test.filter(item => item % 2 === 0);
  }
}

export default GameOfLife;

import play from '..';
import getRandomInt from '../tools/getRandomInt';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (x, y) => x + y],
  ['-', (x, y) => x - y],
  ['*', (x, y) => x * y],
];

const getDataGame = () => {
  const index = getRandomInt(0, operations.length - 1);
  const [operator, operationFunc] = operations[index];

  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);

  const question = `${x} ${operator} ${y}`;
  const correctAnswer = String(operationFunc(x, y));

  return [question, correctAnswer];
};

export default () => play(description, getDataGame);

import play from '..';
import getRandomInt from '../tools/getRandomInt';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  const max = x > y ? x : y;
  let div = 1;
  for (let i = 2; i < max; i += 1) {
    if (x % i === 0 && y % i === 0) {
      div = i;
    }
  }
  return div;
};

const getDataGame = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);

  const question = `${x} ${y}`;
  const correctAnswer = String(getGcd(x, y));

  return [question, correctAnswer];
};

export default () => play(description, getDataGame);

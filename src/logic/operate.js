import Big from 'big.js';

const operate = (no1, no2, op) => {
  let result = Big(0);
  const number1 = Big(no1);
  const number2 = Big(no2);
  switch (op) {
    case '+':
      result = number1.plus(number2).toString();
      break;
    case '-':
      result = number1.minus(number2).toString();
      break;
    case '*':
      result = number1.times(number2).toString();
      break;
    case '/':
      if (number2.toString() === '0') {
        result = 'ERROR';
      } else {
        result = number1.div(number2).toString();
      }
      break;
    case '%':
      result = number1.div(100).times(number2).toString();
      break;
    default:
      return result;
  }
  return result
};

export default operate;

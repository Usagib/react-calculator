import operate from './operate';

const calculate = (data, button) => {
  let { total, next, operation } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const isNumber = numbers.includes(button);
  const operations = ['+', '-', 'X', '%', '+/-', '÷'];
  const isOperation = operations.includes(button);
  const eq = ['='].includes(button);

  if (button === 'AC') {
    total = null;
    next = null;
    operation = null;
    return {
      next,
      total,
      operation,
    };
  }

  if (eq && total && next && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
    return {
      next,
      total,
      operation,
    };
  }

  if (numbers && total && !next && !operation) {
    next = button;
    total = null;
    operation = null;
    return {
      next,
      total,
      operation,
    };
  }

  if (isNumber) {
    if (total === null && next === null && button === '0') {
      return { next, total, operation };
    }
    next = next === null ? button : next += button;
    return { next, total, operation };
  }

  if (isOperation && next && button === '+/-') {
    next = (parseFloat(next) * -1).toString();
    return { next, total, operation };
  }

  if (isOperation && total && !next && !operation && button === '+/-') {
    next = (parseFloat(total) * -1).toString();
    total = null;
    return { next, total, operation };
  }

  if (isOperation && total && button === '+/-') {
    next = (parseFloat(total) * -1).toString();
    return { next, total, operation };
  }

  if (isOperation && next && button === '%') {
    next = (parseFloat(next) / 100).toString();
    return { next, total, operation };
  }

  if (isOperation && total && !next && !operation && button === '%') {
    total = (parseFloat(total) / 100).toString();
    return { next, total, operation };
  }

  if (isOperation && total && button === '%') {
    next = (parseFloat(next) / 100).toString();
    return { next, total, operation };
  }

  if (isOperation && next && total && operation) {
    next = operate(total, next, operation);
    total = null;
    operation = null;
    return { next, total, operation };
  }

  if (operations && total) {
    operation = button;
    return { next, total, operation };
  }

  if (operations && button !== '+/-' && next) {
    total = next;
    next = null;
    operation = button;
    return { next, total, operation };
  }

  return { next, total, operation };
};

export default calculate;

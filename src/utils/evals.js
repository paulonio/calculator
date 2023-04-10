import { PRIORITIES } from '@constants/constants';
import Calculator from './Calculator';

import AddCommand from './commands/AddCommand';
import SubtractCommand from './commands/SubtractCommand';
import MultiplyCommand from './commands/MultiplyCommand';
import DivideCommand from './commands/DivideCommand';
import ModCommand from './commands/ModCommand';

const calculator = new Calculator();

const evaluate = ({ first, second, operation }) => {
  switch (operation) {
    case '+':
      return calculator.execute(new AddCommand(first, second));
    case '-':
      return calculator.execute(new SubtractCommand(first, second));
    case '×':
      return calculator.execute(new MultiplyCommand(first, second));
    case '÷':
      if (second === 0) {
        throw new Error('You cannot divide by zero!');
      }
      return calculator.execute(new DivideCommand(first, second));
    case '%':
      return calculator.execute(new ModCommand(first, second));
    default:
  }
  return null;
};

const evals = (expression) => {
  const numbers = [];
  const operations = [];
  expression.forEach((item) => {
    if (typeof item === 'number') {
      numbers.push(item);
    }
    if (PRIORITIES[item]) {
      let lastOperation = operations[operations.length - 1] || 'default';
      while (PRIORITIES[item] <= PRIORITIES[lastOperation]) {
        const second = numbers.pop();
        const first = numbers.pop();
        const operation = operations.pop();
        const action = { first, second, operation };
        const result = evaluate(action);
        numbers.push(result);
        lastOperation = operations[operations.length - 1] || 'default';
      }
      operations.push(item);
    }
    if (item === '(') {
      operations.push(item);
    }
    if (item === ')') {
      let lastOperation = operations[operations.length - 1];
      while (lastOperation !== '(') {
        const second = numbers.pop();
        const first = numbers.pop();
        const operation = operations.pop();
        const action = { first, second, operation };
        const result = evaluate(action);
        numbers.push(result);
        lastOperation = operations[operations.length - 1];
        if (operations.length === 0) {
          break;
        }
      }
      operations.pop();
    }
  });
  while (operations.length > 0) {
    const second = numbers.pop();
    const first = numbers.pop();
    const operation = operations.pop();
    if (operation === '(') {
      throw new Error('Incorrect using of parentheses');
    }
    const action = { first, second, operation };
    const result = evaluate(action);
    numbers.push(result);
  }
  if ((!numbers[0] || Number.isNaN(numbers[0])) && numbers[0] !== 0) {
    throw new Error('Incorrect expression!');
  }
  return numbers;
};

export default evals;

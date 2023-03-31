const evaluate = (first, second, operation) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '×':
      return first * second;
    case '÷':
      if (second === 0) {
        throw 'You cannot divide by zero!';
      }
      return first / second;
    case '%':
      return first % second;
  }
};

const priorities = {
  default: 0,
  '+': 1,
  '-': 1,
  '×': 2,
  '÷': 2,
  '%': 2,
};

const evals = (expression) => {
  const numbers = [];
  const operations = [];
  expression.forEach((item) => {
    if (typeof item === 'number') {
      numbers.push(item);
    }
    if (priorities[item]) {
      let lastOperation = operations[operations.length - 1] || 'default';
      while (priorities[item] <= priorities[lastOperation]) {
        const second = numbers.pop();
        const first = numbers.pop();
        const operation = operations.pop();
        const result = evaluate(first, second, operation);
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
        const result = evaluate(first, second, operation);
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
      throw 'One parenthesis';
    }
    const result = evaluate(first, second, operation);
    numbers.push(result);
  }
  if (!numbers[0] || Number.isNaN(numbers[0])) {
    throw 'Incorrect expression!';
  }
  return numbers;
};

export default evals;

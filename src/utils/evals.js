const evals = (previous, current, operation) => {
  const prev = Number(previous);
  const curr = Number(current);

  switch (operation) {
    case '+':
      return prev + curr;
    case '-': 
      return prev - curr;
    case '×':
      return prev * curr;
    case '÷':
      return prev / curr;
    case '%':
      return prev % curr;
  }
}

export default evals;
import evals from './evals';

const getResult = (current, previous) => {
  const operand = !Number.isNaN(current) && Number(current);
  let [result] = current === '' ? evals([...previous]) : evals([...previous, operand]);
  if (!Number.isInteger(result)) {
    if (result < 0.001) {
      result = result.toExponential(3).toString();
    } else {
      result = result.toFixed(3);
    }
  } else {
    result = result.toString();
  }
  return result;
};

export default getResult;

import {
  addDigit,
  addDot,
  addOperation,
  addParenthesis,
  changeSign,
  clear,
  clearHistory,
  clearAll,
  deleteDigit,
  evaluate,
} from '@store/slices/calculatorSlice';

const chooseAction = (type, value) => {
  switch (type) {
    case 'number':
      return addDigit({ digit: value });
    case 'operation':
      return addOperation({ operation: value });
    case 'dot':
      return addDot({ dot: value });
    case 'parenthesis':
      return addParenthesis({ parenthesis: value });
    case 'delete':
      return deleteDigit();
    case 'clear':
      return clear();
    case 'clear-history':
      return clearHistory();
    case 'clear-all':
      return clearAll();
    case 'posneg':
      return changeSign();
    case 'evaluate':
      return evaluate({ result: value });
    default:
  }
  return null;
};

export default chooseAction;

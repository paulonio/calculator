import {
  addDigit,
  addDot,
  addOperation,
  addParenthesis,
  changeSign,
  clear,
  deleteDigit,
  evaluate,
} from '../store/slices/calculatorSlice';

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
    case 'posneg':
      return changeSign();
    case 'evaluate':
      return evaluate();
  }
};

export default chooseAction;

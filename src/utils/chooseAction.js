import {addDigit, addDot, changeSign, clear, deleteDigit, evaluate, operate} from '../store/slices/calculatorSlice';

const chooseAction = (type, value) => {
  switch (type) {
    case 'clear':
      return clear();
    case 'number':
      return addDigit({digit: value});
    case 'delete':
      return deleteDigit();
    case 'operation':
      return operate({operation: value});
    case 'evaluate':
      return evaluate();
    case 'dot':
      return addDot({dot: value});
    case 'posneg':
      return changeSign();
  }
}

export default chooseAction;
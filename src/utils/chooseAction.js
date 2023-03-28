import {addDigit, clear, deleteDigit, evaluate, operate} from '../store/slices/calculatorSlice';

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
  }
}

export default chooseAction;
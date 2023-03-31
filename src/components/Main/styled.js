import styled from 'styled-components';

const MainElement = styled.main`
  background-color: #212c35;
`;

const Wrapper = styled.div`
  display: flex;
`;

const CalculatorWrapper = styled.div`
  max-width: 75%;
  height: calc(100vh - 80px);
  padding: 16px 20px;
`;

const HistoryWrapper = styled.div`
  background-color: black;
  height: calc(100vh - 80px);
  width: 25%;
  padding: 16px;
`;

export { MainElement, Wrapper, CalculatorWrapper, HistoryWrapper };

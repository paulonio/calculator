import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px 0;
`;

const PreviousResults = styled.div`
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  color: white;
  font-size: 20px;
  line-height: 24px;
  opacity: 0.7;
  border-radius: 4px 4px 0 0;
`;

const Current = styled.div`
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  color: white;
  font-size: 20px;
  line-height: 24px;
  border-radius: 0 0 4px 4px;
`;

export { Wrapper, PreviousResults, Current };

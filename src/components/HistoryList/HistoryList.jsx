import React from 'react';
import styled from 'styled-components';

const StyledHistoryList = styled.div`
  color: white;
  font-size: 16px;
  line-height: 19px;
`;

const HistoryList = () => {
  return (
    <StyledHistoryList>
      <ul>
        <li>5 + 2</li>
      </ul>
    </StyledHistoryList>
  );
};

export default HistoryList;

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  max-height: calc(100vh - 88px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  padding: 16px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 400;
`;

const List = styled.ul`
  width: 90%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
  overflow-y: auto;
`;

const ListItem = styled.li`
  list-style: none;
  margin-top: 8px;
  &:first-child {
    margin-top: 0;
  }
`;

export {
  Wrapper, Title, List, ListItem,
};

import styled from 'styled-components';

const List = styled.ul`
  display: flex;
`;

const ListLink = styled.li`
  margin-left: 16px;
  list-style: none;
  font-size: 16px;
  line-height: 19px;
  color: ${({ active }) => (active ? '#E9C46A' : '#ffffff')};
  transition: color 0.3s;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    color: #e9c46a;
  }
`;

export { List, ListLink };

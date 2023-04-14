import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
`;

const ListLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 16px;
  list-style: none;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  transition: color 0.3s;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    color: #e9c46a;
  }
  &.active {
    color: #e9c46a;
  }
`;

export { List, ListLink };

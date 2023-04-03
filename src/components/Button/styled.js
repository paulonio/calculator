import styled from 'styled-components';

const ButtonElement = styled.button`
  width: 80px;
  height: 80px;
  margin: 16px;
  background-color: #121420;
  color: white;
  font-size: 40px;
  line-height: 48px;
  border: none;
  border-radius: 4px;
  transition: opacity 0.3s;
  &:nth-child(5n + 1) {
    margin-left: 0;
  }
  &:nth-child(5n) {
    margin-right: 0;
  }
  &:last-child {
    width: 192px;
    margin-right: 0;
    background-color: #e76f51;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  &:enabled:active {
    background-color: #f4a261;
  }
  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`;

export { ButtonElement };

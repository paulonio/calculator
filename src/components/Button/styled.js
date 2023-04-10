import styled from 'styled-components';

const ButtonElement = styled.button`
  width: 80px;
  height: 80px;
  margin: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  line-height: 48px;
  border: ${({ theme }) => (theme.name === 'light-theme' ? '1px solid #2b3945' : 'none')};
  border-radius: 4px;
  transition: background-color 0.3s;
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
    &:enabled:hover {
      background-color: #e87e64;
    }
  }
  &:enabled:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundButtonHover};
  }
  &:enabled:active {
    background-color: #f4a261;
  }
  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`;

export default ButtonElement;

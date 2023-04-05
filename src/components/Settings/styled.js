import styled from 'styled-components';

const SettingsElement = styled.main``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h3`
  padding: 16px 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: white;
`;

const Select = styled.select`
  width: 100%;
  max-width: 160px;
  background-color: #121420;
  color: white;
  font-size: 16px;
  line-height: 19px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  transition: opacity 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Label = styled.label`
  margin-top: 16px;
  width: 100%;
  max-width: 160px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  color: white;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

export { SettingsElement, Wrapper, Title, Select, Label, Checkbox };

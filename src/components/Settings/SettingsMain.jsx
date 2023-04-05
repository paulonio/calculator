import React from 'react';
import { Container } from '../Container/Container';
import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice';

const SettingsMain = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    const theme = event.target.value;
    const action = changeTheme({ theme });
    dispatch(action);
  };

  return (
    <SettingsElement>
      <Container>
        <Wrapper>
          <Title>Settings</Title>
          <Select value={theme} onChange={handleThemeChange}>
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
          </Select>
          <Label>
            <Checkbox />
            Hide history
          </Label>
        </Wrapper>
      </Container>
    </SettingsElement>
  );
};

export default SettingsMain;

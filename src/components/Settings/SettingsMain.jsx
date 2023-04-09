import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '@store/slices/themeSlice';
import { toggleHistory } from '@store/slices/historySlice';

import { Container } from '@components/Container/Container';

import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';

const SettingsMain = () => {
  const theme = useSelector((state) => state.theme.theme);
  const showHistory = useSelector((state) => state.history.showHistory);
  const dispatch = useDispatch();

  const handleThemeChange = (event) => {
    const theme = event.target.value;
    const action = changeTheme({ theme });
    dispatch(action);
    localStorage.setItem('theme', theme);
  };

  const handleHistoryChange = (event) => {
    const showHistory = event.target.checked;
    const action = toggleHistory({ showHistory });
    dispatch(action);
    localStorage.setItem('show-history', showHistory);
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
            <Checkbox checked={showHistory} onChange={handleHistoryChange} />
            Show history
          </Label>
        </Wrapper>
      </Container>
    </SettingsElement>
  );
};

export default SettingsMain;

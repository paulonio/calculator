import React from 'react';
import { Container } from '../Container/Container';
import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';

const SettingsMain = () => {
  return (
    <SettingsElement>
      <Container>
        <Wrapper>
          <Title>Settings</Title>
          <Select>
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

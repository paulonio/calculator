import React from 'react';
import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';
import { Container } from '../Container/Container';

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
            {/* <input type="checkbox" name="history" /> */}
            Hide history
          </Label>
        </Wrapper>
      </Container>
    </SettingsElement>
  );
};

export default SettingsMain;

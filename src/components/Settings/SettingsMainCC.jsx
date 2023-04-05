import React, { Component } from 'react';
import { Container } from '../Container/Container';
import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';

class SettingsMainCC extends Component {
  render() {
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
  }
}

export default SettingsMainCC;

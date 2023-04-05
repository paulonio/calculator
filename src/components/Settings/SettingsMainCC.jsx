import React, { Component } from 'react';
import { Container } from '../Container/Container';
import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';
import { connect } from 'react-redux';
import { changeTheme } from '../../store/slices/themeSlice';

class SettingsMainCC extends Component {
  handleThemeChange(event) {
    const theme = event.target.value;
    const action = changeTheme({ theme });
    this.props.dispatch(action);
  }

  render() {
    const theme = this.props.theme;

    return (
      <SettingsElement>
        <Container>
          <Wrapper>
            <Title>Settings</Title>
            <Select value={theme} onChange={this.handleThemeChange.bind(this)}>
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

function mapStateToProps(state) {
  const theme = state.theme.theme;
  return { theme };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMainCC);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeTheme } from '@store/slices/themeSlice';
import { toggleHistory } from '@store/slices/historySlice';

import { Container } from '@components/Container/Container';

import { SettingsElement, Wrapper, Select, Title, Label, Checkbox } from './styled';

class SettingsMainCC extends Component {
  handleThemeChange(event) {
    const theme = event.target.value;
    const action = changeTheme({ theme });
    this.props.dispatch(action);
    localStorage.setItem('theme', theme);
  }

  handleHistoryChange(event) {
    const showHistory = event.target.checked;
    const action = toggleHistory({ showHistory });
    this.props.dispatch(action);
    localStorage.setItem('show-history', showHistory);
  }

  render() {
    const theme = this.props.theme;
    const showHistory = this.props.showHistory;

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
              <Checkbox checked={showHistory} onChange={this.handleHistoryChange.bind(this)} />
              Show history
            </Label>
          </Wrapper>
        </Container>
      </SettingsElement>
    );
  }
}

function mapStateToProps(state) {
  const theme = state.theme.theme;
  const showHistory = state.history.showHistory;
  return { theme, showHistory };
}

export default connect(mapStateToProps)(SettingsMainCC);

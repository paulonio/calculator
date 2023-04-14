import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, ListItem, Wrapper, Title } from './styled';

class HistoryCC extends Component {
  render() {
    const history = this.props.history;
    return (
      <Wrapper>
        <Title>History</Title>
        <List>
          {history.map((expression, id) => (
            <ListItem key={id.toString()}>{`${id + 1}. ${expression}`}</ListItem>
          ))}
        </List>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const history = state.calculator.history;
  return { history };
}

export default connect(mapStateToProps)(HistoryCC);

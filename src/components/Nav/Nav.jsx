import React from 'react';
import { List, ListLink } from './styled';

const Nav = () => {
  return (
    <List>
      <ListLink active="true">Home</ListLink>
      <ListLink>HomeCC</ListLink>
      <ListLink>Settings</ListLink>
      <ListLink>SettingsCC</ListLink>
    </List>
  );
};

export default Nav;

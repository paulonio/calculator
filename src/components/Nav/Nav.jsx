import React from 'react';

import { List, ListLink } from './styled';

const Nav = () => {
  return (
    <List>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/homeCC">HomeCC</ListLink>
      <ListLink to="/settings">Settings</ListLink>
      <ListLink to="/settingsCC">SettingsCC</ListLink>
    </List>
  );
};

export default Nav;

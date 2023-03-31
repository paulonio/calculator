import Flex from '../Flex/Flex';
import Link from '../Link/Link';
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
  // return (
  //   <Flex as="nav">
  //     <Link borderBottom="2px #FFFFFF solid">Home</Link>
  //     <Link>HomeCC</Link>
  //     <Link>Settings</Link>
  //     <Link>SettingsCC</Link>
  //   </Flex>
  // );
};

export default Nav;

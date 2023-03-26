import Flex from '../Flex/Flex';
import Link from '../Link/Link';

const Nav = () => {
  return (
    <Flex as="nav">
      <Link borderBottom="2px #FFFFFF solid">Home</Link>
      <Link>HomeCC</Link>
      <Link>Settings</Link>
      <Link>SettingsCC</Link>
    </Flex>
  );
};

export default Nav;

import Flex from '../Flex/Flex';
import Title from '../Title/Title';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      backgroundColor="#404040"
      height="80px"
    >
      <Title>Calculator app</Title>
      <Nav />
    </Flex>
  );
};

export default Header;

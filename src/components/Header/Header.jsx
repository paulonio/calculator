import Flex from '../Flex/Flex';
// import Title from './styled';
import Nav from '../Nav/Nav';
import { HeaderElement, Wrapper, Title } from './styled';
import { Container } from '../Container/Container';

const Header = () => {
  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Calculator app</Title>
          <Nav />
        </Wrapper>
      </Container>
    </HeaderElement>
  );
  // return (
  //   <Flex
  //     as="header"
  //     align="center"
  //     justify="space-between"
  //     backgroundColor="#404040"
  //     height="80px"
  //     width="100%"
  //   >
  //     <Title>Calculator app</Title>
  //     <Nav />
  //   </Flex>
  // );
};

export default Header;

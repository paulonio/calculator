import React from 'react';
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
};

export default Header;

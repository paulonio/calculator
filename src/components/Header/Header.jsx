import React from 'react';

import Nav from '@components/Nav/Nav';
import { Container } from '@components/Container/Container';

import { HeaderElement, Wrapper, Title } from './styled';

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

import styled from 'styled-components';

const HeaderElement = styled.header`
  box-shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
  background-color: #212c35;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 27px;
  font-weight: 400;
  color: #ffffff;
`;

export { HeaderElement, Wrapper, Title };

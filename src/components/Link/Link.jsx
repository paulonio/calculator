import styled from 'styled-components';

const StyledLink = styled.a`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 16px;
  &:first-child {
    margin-left: 0;
  }
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
  &:hover {
    border-bottom: 2px #ffffff solid;
    cursor: pointer;
  }
`;

const Link = (props) => {
  return <StyledLink {...props} />;
};

export default Link;

import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 24px;
  line-height: 27px;
  font-weight: 400;
  color: #ffffff;
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;

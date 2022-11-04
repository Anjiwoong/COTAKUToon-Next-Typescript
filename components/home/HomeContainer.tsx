import styled from 'styled-components';
import HomeMain from './HomeMain';
import HomeNav from './HomeNav';

const HomeContainer = () => {
  return (
    <Wrapper>
      <HomeNav />
      <HomeMain />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()}

  max-width: 1170px;
  padding: 0 30px;

  ${({ theme }) => theme.media.mobile`
    padding: 0;
  `}
`;

export default HomeContainer;

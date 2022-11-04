import styled from 'styled-components';
import Header from '../components/header/Header';
import HomeContainer from '../components/home/HomeContainer';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeContainer />
    </>
  );
};

const Test = styled.p`
  color: red;

  ${({ theme }) => theme.media.tablet`
  color: blue
  `}

  ${({ theme }) => theme.media.mobile`
  color: yellow
  `}
`;

const Test2 = styled.div`
  width: 1000;
`;

const FlexBox = styled.div`
  ${({ theme }) => theme.mixins.flexCenter()};
  width: 400px;
  height: 400px;
  background-color: red;

  ${({ theme }) => theme.mixins.autoMargin()}
`;

export default HomePage;

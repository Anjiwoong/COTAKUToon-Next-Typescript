import styled from 'styled-components';
import CarouselButton from '../../Layout/CarouselButton';
import OnlyRidiSectionItem from './OnlyRidiSectionItem';

const OnlyRidiSection = () => {
  return (
    <Wrapper>
      <h2>mainTitle</h2>
      <Carousel>
        <CarouselWrap>
          <ul>
            <OnlyRidiSectionItem />
            <OnlyRidiSectionItem />
            <OnlyRidiSectionItem />
            <OnlyRidiSectionItem />
          </ul>
        </CarouselWrap>
        <CarouselButton />
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 40px 30px 0;

  ${({ theme }) => theme.media.mobile`
    margin: 40px 18px 0;
  `}

  h2 {
    font-weight: 700;
    font-size: 24px;
  }
`;

const Carousel = styled.div`
  position: relative;

  button {
    :nth-child(1) {
      top: 90px;
    }

    :last-child {
      top: 90px;
    }
  }
`;

const CarouselWrap = styled.div`
  overflow: hidden;

  ul {
    ${({ theme }) => theme.mixins.flexBox()};
    padding-top: 40px;
  }
`;

export default OnlyRidiSection;

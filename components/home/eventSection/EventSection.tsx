import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import CarouselButton from '../../Layout/CarouselButton';
import EventSectionItem from './EventSectionItem';

const EventSection = () => {
  return (
    <Wrapper>
      <h2>mainTitle</h2>
      <Carousel>
        <CarouselWrap>
          <CarouselList>
            <EventSectionItem />
            <EventSectionItem />
            <EventSectionItem />
            <EventSectionItem />
          </CarouselList>
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
    margin-bottom: 30px;

    ${({ theme }) => theme.media.mobile`
      margin-bottom: 10px;
    `}
  }
`;

const Carousel = styled.div`
  position: relative;
`;

const CarouselWrap = styled.div`
  overflow: hidden;
`;

const CarouselList = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'nowrap')};
`;

export default EventSection;

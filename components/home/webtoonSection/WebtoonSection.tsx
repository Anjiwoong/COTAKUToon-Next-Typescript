import styled from 'styled-components';
import { DataTypes, WebtoonArrTypes } from '../../../types/webtoon-types';

import CarouselButton from '../../Layout/CarouselButton';
import WebtoonSectionItem from './WebtoonSectionItem';

const WebtoonSection = (props: WebtoonArrTypes) => {
  const sectionTitle = props.title?.next();

  return (
    <Wrapper>
      <h2>{sectionTitle?.value[1]}</h2>
      <Carousel>
        <CarouselWrap>
          <CarouselList>
            {props.webtoon.map((webtoon: DataTypes) => (
              <WebtoonSectionItem key={webtoon.id} webtoon={webtoon} />
            ))}
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
    margin-bottom: 20px;
  }
`;

const Carousel = styled.div`
  position: relative;

  button {
    :nth-child(1) {
      top: 130.5px;

      ${({ theme }) => theme.media.mobile`
        top: 84px;
      `}
    }

    :last-child {
      top: 130.5px;

      ${({ theme }) => theme.media.mobile`
        top: 84px;
      `}
    }
  }
`;

const CarouselWrap = styled.div`
  overflow: hidden;
`;

const CarouselList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()};
`;

export default WebtoonSection;

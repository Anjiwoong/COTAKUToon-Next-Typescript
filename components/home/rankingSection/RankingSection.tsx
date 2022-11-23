import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import { DataTypes } from '../../../types/webtoon-types';
import RankingSectionItem from './RankingSectionItem';
import Button from '../../UI/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const RankingSection = ({ webtoon }: { webtoon: DataTypes[] }) => {
  const sectionTitle = webtoon.every(data => data.category?.includes('rank'));

  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      variableWidth: true,
      infinite: false,
      speed: 600,
      autoplay: false,
      draggable: false,
      slidesToScroll: 6,

      prevArrow: (
        <Button prev>
          <IoIosArrowBack />
        </Button>
      ),
      nextArrow: (
        <Button next>
          <IoIosArrowForward />
        </Button>
      ),
    }),
    []
  );

  return (
    <RankWrapper>
      <h2>{sectionTitle ? '실시간 랭킹' : '기다리면 무료로 시작해!'}</h2>
      <Carousel>
        <StyledSlider {...settings}>
          {webtoon?.map((webtoon, i) => (
            <RankingSectionItem key={webtoon.id} webtoon={webtoon} index={i} />
          ))}
        </StyledSlider>
      </Carousel>
    </RankWrapper>
  );
};

const RankWrapper = styled.section`
  position: relative;
  margin: 40px 30px 0;

  ${({ theme }) => theme.media.mobile`
    margin: 40px 18px 0;
  `}

  h2 {
    font-weight: 700;
    font-size: 24px;

    ${({ theme }) => theme.media.mobile`
      font-size: 18px;
    `}
  }
`;

const Carousel = styled.div`
  margin-top: 16px;
`;

const CarouselList = styled.ol`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'wrap')};
  height: 368px;

  ${({ theme }) => theme.media.mobile`
    height: 273px;
  `}
`;

const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-prev,
  .slick-next {
    z-index: 1000;

    ${({ theme }) => theme.media.mobile`
      top: 135px;
    `}

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.fontGray1};
      border: 2px solid ${({ theme }) => theme.colors.borderGray2};
      background: ${({ theme }) => theme.colors.white};
    }

    &.slick-disabled {
      opacity: 0;
      pointer-events: none;
    }
  }

  .slick-list {
    height: 368px;
  }

  .slick-track {
    ${({ theme }) =>
      theme.mixins.flexBox('column', 'flex-start', 'stretch', 'wrap')};
    height: 368px;
    max-width: 100%;

    ${({ theme }) => theme.media.mobile`
      height: 273px;
    `};
  }

  .slick-slide {
    ${({ theme }) => theme.mixins.flexBox()}
    width: 370px;
    height: 116px;
    margin-bottom: 6px;

    ${({ theme }) => theme.media.mobile`
      width: 327px;
      height: 87px;
      margin-bottom: 3px;    
    `}
  }
`;

export default RankingSection;

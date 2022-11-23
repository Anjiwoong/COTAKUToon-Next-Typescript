import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DataTypes, WebtoonArrTypes } from '../../../types/webtoon-types';

import WebtoonSectionItem from './WebtoonSectionItem';
import Button from '../../UI/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const WebtoonSection = (props: WebtoonArrTypes) => {
  const [randomWebtoon, setRandomWebtoon] = useState<DataTypes[]>([]);
  const randomData = props.webtoon.sort(() => Math.random() - 0.5);

  useEffect(() => {
    setRandomWebtoon(prev => [...prev, ...randomData]);
  }, []);

  const settings = useMemo<Settings>(
    () => ({
      variableWidth: true,
      dots: false,
      infinite: false,
      speed: 600,
      autoplay: false,
      draggable: false,
      slidesToScroll: 5,

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
    <Wrapper>
      <h2>sectionTitle</h2>
      <Carousel>
        <StyledSlider {...settings}>
          {randomWebtoon.map((webtoon: DataTypes) => (
            <WebtoonSectionItem key={webtoon.id} webtoon={webtoon} />
          ))}
        </StyledSlider>
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

const StyledSlider = styled(Slider)`
  li {
    list-style: none;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-list {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'stretch', 'wrap')};
    overflow: hidden;
  }

  .slick-prev,
  .slick-next {
    z-index: 1000;

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

  .slick-track {
    display: flex;
  }
`;

export default WebtoonSection;

import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import OnlyRidiSectionItem from './OnlyRidiSectionItem';
import Button from '../../UI/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const onlyRidiData = [
  {
    title: ['저주를 받더라도 ', ' 나를 계속 사랑해'],
    sub: '<마귀> 전원 포인트!',
    coverMain: '/images/onlyRidi/devil.webp',
    coverBg: '/images/onlyRidi/devil_bg.webp',
  },
  {
    title: ['가정교사로 온 섬, ', ' 고용주 남매가 수상하다'],
    sub: '마녀가 사는 섬',
    coverMain: '/images/onlyRidi/witch.webp',
    coverBg: '',
  },
  {
    title: ['너를 생각하면 생각할수록 ', ' 나는 고독하고 외로워져'],
    sub: '상수리나무 아래',
    coverMain: '/images/onlyRidi/tree.webp',
    coverBg: '',
  },
  {
    title: ['환상 속 괴물은 ', ' 당신의 어둠을 먹고 자란다'],
    sub: '환상은 밤에 자란다',
    coverMain: '/images/onlyRidi/fantasy.webp',
    coverBg: '/images/onlyRidi/fantasy_bg.webp',
  },
];

const OnlyRidiSection = () => {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: false,
      slidesToShow: 3,
      speed: 700,
      autoplay: false,
      draggable: false,
      slidesToScroll: 1,

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

      responsive: [
        {
          breakpoint: 1169,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <Wrapper>
      <h2>오직 리디에서만!</h2>
      <Carousel>
        <StyledSlider {...settings}>
          {onlyRidiData.map(data => (
            <OnlyRidiSectionItem
              key={data.sub}
              title={data.title}
              sub={data.sub}
              coverMain={data.coverMain}
              coverBg={data.coverBg}
            />
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

const StyledSlider = styled(Slider)`
  li {
    list-style: none;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
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

  .slick-slide {
    padding-top: 40px;

    &:nth-child(1) {
      a > div {
        background: ${({ theme }) => theme.colors.ridiRed};
      }
    }

    &:nth-child(2) {
      a > div {
        background: ${({ theme }) => theme.colors.ridiPurple};
      }
    }

    &:nth-child(3) {
      a > div {
        background: ${({ theme }) => theme.colors.ridiYellow1};
      }
    }

    &:last-child {
      a > div {
        background: ${({ theme }) => theme.colors.ridiTurquoise};
      }
    }
  }
`;

export default OnlyRidiSection;

import { useMemo } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';

import Button from '../../UI/Button';
import EventSectionItem from './EventSectionItem';

const eventData = [
  {
    title: ['기간 한정 45화 무료! ', '유료로 보면 포인트+'],
    cover: '/images/event/event_switch.webp',
  },
  {
    title: ['<그대 사자의 이름으로> ', ' 31화 UP!'],
    cover: '/images/event/switch_up.webp',
  },
  {
    title: ['8월의 리디 웹툰 미리 맛보기 ', ' 신작이 찾아왔어요!'],
    cover: '/images/event/event_early.webp',
  },
  {
    title: ['KT 결제로 리디캐시 ', ' 충전 시 5천원 할인!'],
    cover: '/images/event/event_cash.webp',
  },
];

const EventSection = () => {
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
      <h2>이벤트 보러가기</h2>
      <Carousel>
        <StyledSlider {...settings}>
          {eventData.map(data => (
            <EventSectionItem
              key={data.cover}
              title={data.title}
              cover={data.cover}
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
    margin-bottom: 30px;

    ${({ theme }) => theme.media.mobile`
      margin-bottom: 10px;
    `}
  }
`;

const Carousel = styled.div`
  position: relative;
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
    &:nth-child(1) {
      li {
        background: ${({ theme }) => theme.colors.eventSwitch};
      }
    }

    &:nth-child(2) {
      li {
        background: ${({ theme }) => theme.colors.eventUp};
      }
    }

    &:nth-child(3) {
      li {
        background: ${({ theme }) => theme.colors.eventEarly};
      }
    }

    &:last-child {
      li {
        background: ${({ theme }) => theme.colors.eventCash};
        margin-right: 0;
      }
    }
  }
`;

export default EventSection;

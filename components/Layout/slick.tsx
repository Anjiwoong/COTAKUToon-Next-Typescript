import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useMemo } from 'react';
import Button from '../UI/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

const Slick = ({
  children,
  className,
  autoplay = false,
  speed = 300,
  loop = true,
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      slidesToShow: 4,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
      draggable: false,
      nextArrow: (
        <NextTo>
          <IoIosArrowForward />
        </NextTo>
      ),
    }),
    [autoplay, loop, speed]
  );
  return (
    <SlideWrapper className={className}>
      <CarouselSlider {...settings}>{children}</CarouselSlider>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.ul`
  position: relative;
`;

const CarouselSlider = styled(Slider)`
  .slick-next {
    svg {
      transform: translateY(-7px);
    }
  }
`;

const NextTo = styled(Button)`
  ${({ theme }) => theme.mixins.flexCenter()};
  ${({ theme }) => theme.mixins.centerTranslateY()};
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.borderGray2};
  border-radius: 50%;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.fontGray1};

  right: -20px;
`;

export default Slick;

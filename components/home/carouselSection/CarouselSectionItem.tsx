import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import {
  CarouselItemTypes,
  CarouselItemPropsTypes,
} from '../../../types/home/carousel-types';

import { notImplementedHandler } from '../../../lib/not-implemented';

const CarouselSectionItem = ({
  carousel,
  total,
  carouselNum,
  duration,
  endPoint,
}: CarouselItemTypes) => {
  const title = carousel.title?.split('<br />');

  const nextSlide =
    carouselNum + 1 === carousel.id || carouselNum + 2 === carousel.id;

  return (
    <CarouselItem
      current={carouselNum === carousel.id}
      next={nextSlide}
      duration={duration}
      endPoint={endPoint}
    >
      <Link href="#" onClick={notImplementedHandler}>
        <Image
          src={carousel.cover}
          alt="carousel"
          width={1110}
          height={40}
          priority
        />
        <CarouselDesc current={carouselNum === carousel.id} next={nextSlide}>
          <CarouselInfo>
            {carousel.up && <span>NEW</span>}
            {carousel.only && <span>ONLY</span>}
            {carousel.free && <span>리다무</span>}
          </CarouselInfo>
          <Title>
            <span>
              {title && title[0]}
              <br />
              {title && title[1]}
            </span>
          </Title>
          <SubTitle>
            <span>{carousel.subTitle}</span>
          </SubTitle>
          <Counter>
            <span>{carouselNum === 0 ? 10 : carouselNum}</span> / {total}
          </Counter>
        </CarouselDesc>
      </Link>
    </CarouselItem>
  );
};

const CarouselItem = styled.li`
  min-width: 45px;
  height: 400px;
  margin-left: 8px;
  border-radius: 5px;
  overflow: hidden;
  transition: none;

  &:first-child {
    margin-left: 0;
  }

  ${({ theme }) => theme.media.mobile`
    height: 330px;
  `}

  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ${(props: CarouselItemPropsTypes) =>
    props.current &&
    css`
      min-width: calc(100% - 108px);
    `};

  ${(props: CarouselItemPropsTypes) =>
    props.endPoint === '' &&
    css`
      transition: min-width calc(${props.duration} * 1ms)
        cubic-bezier(0.6, 0.04, 0.995, 0.56);
    `};
`;

const CarouselDesc = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 960px;
  color: ${({ theme }) => theme.colors.white};
  animation-fill-mode: forwards;
  padding-left: 40px;
  opacity: 0;

  ${({ theme }) => theme.media.mobile`
    bottom: 20px;
    padding-left: 20px;
  `}

  ${(props: CarouselItemPropsTypes) =>
    props.current &&
    css`
      opacity: 1;
    `}

    ${(props: CarouselItemPropsTypes) =>
    props.next &&
    css`
      opacity: 0;
    `}
`;

const CarouselInfo = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};

  span {
    font-size: 11px;
    padding: 4px 6px;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

const Title = styled.div`
  font-size: calc(14px + 1.5vw);
  font-weight: 600;
  margin-top: 8px;
`;

const SubTitle = styled.div`
  margin-top: 6px;
  opacity: 0.8;
  font-size: calc(8.5px + 0.5vw);
`;

const Counter = styled.div`
  position: absolute;
  right: 40px;
  bottom: 0;
  width: fit-content;
  height: 20px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  span {
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.media.mobile`
    right: 10px;
    font-size: 11px;
    padding: 0 6px;
  `}
`;

export default CarouselSectionItem;

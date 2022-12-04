import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import UseInterval from '../../../hooks/use-interval';

import { mainCarouselState } from '../../../states/mainCarouselState';
import { CarouselListPropsTypes } from '../../../types/carousel-types';

import CarouselButton from '../../Layout/CarouselButton';
import CarouselSectionItem from './CarouselSectionItem';

const CarouselSection = () => {
  const [carouselNum, setCarouselNum] = useState<number>(1);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [endPoint, setEndPoint] = useState<string>('');
  const carousel = useRecoilValue(mainCarouselState);

  const moveWidth = 53;
  const DURATION = 600;

  useEffect(() => {
    const moveTimer = setTimeout(() => setIsMoving(false), DURATION);
    let transitionTimer: ReturnType<typeof setTimeout>;

    if (carouselNum === 10)
      transitionTimer = setTimeout(() => {
        setEndPoint('end');
        setCarouselNum(0);
      }, DURATION);

    if (carouselNum === -1)
      transitionTimer = setTimeout(() => {
        setEndPoint('start');
        setCarouselNum(9);
      }, DURATION);

    setIsMoving(true);

    return () => {
      clearTimeout(moveTimer);
      clearTimeout(transitionTimer);
    };
  }, [carouselNum]);

  UseInterval(
    () => {
      setCarouselNum(prev => prev + 1);
      setEndPoint('');
    },
    5000,
    carouselNum
  );

  const prevHandler = () => {
    if (!isMoving) {
      setCarouselNum(prev => prev - 1);
      setEndPoint('');
    }
  };

  const nextHandler = () => {
    if (!isMoving) {
      setCarouselNum(prev => prev + 1);
      setEndPoint('');
    }
  };

  return (
    <CarouselWrapper>
      <Inner>
        <CarouselList
          carouselNum={carouselNum}
          moveWidth={moveWidth}
          endPoint={endPoint}
        >
          {carousel.map((item, i) => (
            <CarouselSectionItem
              key={i}
              carousel={item}
              carouselNum={carouselNum}
              total={carousel.length - 4}
              duration={DURATION}
              endPoint={endPoint}
            />
          ))}
        </CarouselList>
      </Inner>
      <CarouselButton prevHandler={prevHandler} nextHandler={nextHandler} />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.section`
  position: relative;
  height: 400px;
  margin: 0 30px;
  border-radius: 5px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile`
    margin: 18px;
    height: 330px;
  `}
`;

const Inner = styled.div`
  height: 100%;
  overflow: hidden;
`;

const CarouselList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()};
  width: 100%;
  height: 100%;
  transition: none;

  ${(props: CarouselListPropsTypes) =>
    props.endPoint === '' &&
    css`
      transition: all 600ms ease-in;
      transform: translateX(-${(props.carouselNum + 1) * props.moveWidth}px);
    `}

  ${(props: CarouselListPropsTypes) =>
    props.endPoint === 'start' &&
    css`
      transform: translateX(-${10 * props.moveWidth}px);
    `}
  
  ${(props: CarouselListPropsTypes) =>
    props.endPoint === 'end' &&
    css`
      transform: translateX(-53px);
    `}
`;

export default CarouselSection;

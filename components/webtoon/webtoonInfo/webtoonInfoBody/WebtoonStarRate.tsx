import styled, { css } from 'styled-components';

import { DataTypes } from '../../../../types/webtoon-types';

const WebtoonStarRate = (props: DataTypes) => {
  const starPercentage = props.rating && (props.rating / 5) * 100;

  return (
    <Wrapper>
      <StartBg rate={starPercentage}>
        <span></span>
      </StartBg>
      <span>{props.rating}점</span>
      <span>({props.views}명)</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.marginY('20px')};

  span {
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.accentFont};
      font-size: 14px;
      margin-right: 2px;
      font-weight: 600;
      transform: translateY(1px);
    }

    &:last-child {
      font-size: 12px;
      font-weight: 100;
      transform: translateY(1px);
    }
  }
`;

export const StartBg = styled.span`
  position: relative;
  width: 75px;
  height: 15px;
  display: inline-block;
  background: url('/images/books/emptyStar.svg') center center no-repeat;
  background-size: 100% 100%;
  margin-right: 4px;

  ${(props: { rate?: number }) =>
    props.rate &&
    css`
      span {
        width: ${props.rate}%;
      }
    `}

  span {
    position: relative;
    display: block;
    overflow: hidden;
    height: 15px;

    &::after {
      content: '';
      position: absolute;
      display: block;
      background: url('/images/books/stars.svg') center center no-repeat;
      background-size: 100% 100%;
      left: 0;
      top: -1px;
      width: 75px;
      height: 15px;
    }
  }
`;

export default WebtoonStarRate;

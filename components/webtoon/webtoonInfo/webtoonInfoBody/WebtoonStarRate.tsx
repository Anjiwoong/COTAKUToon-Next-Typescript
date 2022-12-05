import styled, { css } from 'styled-components';

import { DataTypes } from '../../../../types/common/webtoon-types';

const WebtoonStarRate = (props: DataTypes) => {
  return (
    <Wrapper>
      <StartBg rate={props.rating}>
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
        width: ${(props.rate / 5) * 100}%;
      }
    `}

  span {
    position: absolute;
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
      top: 0;
      width: 75px;
      height: 15px;
    }
  }
`;

export default WebtoonStarRate;

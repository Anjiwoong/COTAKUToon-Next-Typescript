import { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import { ImStarFull } from 'react-icons/im';
import { SetStarRateTypes } from '../../../types/add-review-types';

const reviewRating = [...Array(5)].map((_, i) => (i + 1).toString());

const EvaluateRate = (props: SetStarRateTypes) => {
  const hoverHandler = (e: MouseEvent) => {
    const target = e.target as Element;

    if (target.id) props.setStarHovered(+target.id);
  };

  const onMouseLeaveHandler = () => {
    if (props.starRate === 0) props.setStarHovered(0);
    else props.setStarHovered(props.starRate);
  };

  const setRateHandler = (e: MouseEvent) => {
    props.setStarRateHandler(+e.currentTarget?.id);
  };

  return (
    <StarRate>
      <EvaluateBook>이 책을 평가해주세요!</EvaluateBook>
      <StarWrapper>
        {reviewRating.map(star => (
          <RateStar
            key={star}
            size={35}
            id={star}
            hover={props.starHovered}
            onMouseEnter={hoverHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={setRateHandler}
          />
        ))}
      </StarWrapper>
    </StarRate>
  );
};

const StarRate = styled.div`
  position: relative;
`;

const EvaluateBook = styled.span`
  display: block;
  height: 42px;
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: 700;
  padding-top: 10px;
  letter-spacing: -0.03em;
`;

const StarWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter()};
  margin-top: 5px;
`;

const RateStar = styled(ImStarFull)`
  color: ${({ theme }) => theme.colors.bgBarGray1};

  ${(props: { hover: number; id: string }) =>
    props.hover >= +props.id &&
    css`
      color: ${({ theme }) => theme.colors.accentFont};
    `}
`;

export default EvaluateRate;

import styled from 'styled-components';

import { DataTypes } from '../../../types/webtoon-types';

import ReviewRating from './ReviewRating';
import EvaluateWebtoon from './EvaluateWebtoon';

const WriteReviewSection = ({ rating }: DataTypes) => {
  return (
    <Wrapper>
      <ReviewRating rating={rating} />
      <EvaluateWebtoon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
`;

export default WriteReviewSection;

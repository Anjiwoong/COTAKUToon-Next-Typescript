import styled from 'styled-components';

import { DataTypes } from '../../../types/webtoon-types';

import ReviewRatingItem from './ReviewRatingItem';
import { StartBg } from '../webtoonInfo/webtoonInfoBody/WebtoonStarRate';

const reviewRating = [...Array(5)].map((_, i) => i + 1).reverse();

const ReviewRating = ({ rating }: DataTypes) => {
  return (
    <RatingWrapper>
      <Rate>{rating}</Rate>
      <StartBg rate={rating}>
        <span></span>
      </StartBg>
      <RatingList>
        {reviewRating.map(rate => (
          <ReviewRatingItem key={rate} rate={rate} />
        ))}
      </RatingList>
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  width: 120px;
  padding: 44px 0 20px 0;
  text-align: center;
  margin-right: 10px;
  flex-shrink: 0;
`;

const Rate = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 35px;
  color: ${({ theme }) => theme.colors.myTitle};
  font-weight: 700;
`;

const RatingList = styled.ul`
  padding: 6px 0 10px 0;
`;

export default ReviewRating;

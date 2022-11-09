import styled from 'styled-components';
import { StartBg } from '../webtoonInfo/webtoonInfoBody/WebtoonStarRate';
import ReviewRatingItem from './ReviewRatingItem';

const ReviewRating = () => {
  return (
    <RatingWrapper>
      <Rating>4.7</Rating>
      <StartBg>
        <span></span>
      </StartBg>
      <RatingList>
        <ReviewRatingItem />
        <ReviewRatingItem />
        <ReviewRatingItem />
        <ReviewRatingItem />
        <ReviewRatingItem />
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

const Rating = styled.span`
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

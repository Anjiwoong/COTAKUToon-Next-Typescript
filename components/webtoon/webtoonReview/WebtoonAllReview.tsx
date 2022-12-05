import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { reviewState } from '../../../states/reviewState';

import WebtoonAllReviewItem from './WebtoonAllReviewItem';

const WebtoonAllReview = () => {
  const reviewList = useRecoilValue(reviewState);

  return (
    <ReviewListWrap>
      <AllReviewTitle>전체리뷰</AllReviewTitle>
      <ul>
        {reviewList.map(review => (
          <WebtoonAllReviewItem
            key={review.id}
            userId={review.userId}
            date={review.date}
            comment={review.comment}
            starRating={review.starRating}
          />
        ))}
      </ul>
    </ReviewListWrap>
  );
};

const ReviewListWrap = styled.div`
  margin-top: 40px;
`;

const AllReviewTitle = styled.span`
  display: block;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
  padding-bottom: 10px;
  padding-left: 5px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontGray7};
`;

export default WebtoonAllReview;

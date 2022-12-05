import styled from 'styled-components';

import { ReviewTypes } from '../../../types/webtoon/review-types';

import CommentInfo from './CommentInfo';
import ReviewerInfo from './ReviewerInfo';

const WebtoonAllReviewItem = (props: ReviewTypes) => {
  return (
    <ReviewItem>
      <ReviewerInfo
        userId={props.userId}
        date={props.date}
        starRating={props.starRating}
      />
      <CommentInfo comment={props.comment} />
    </ReviewItem>
  );
};

const ReviewItem = styled.li`
  ${({ theme }) => theme.mixins.flexBox()};
  padding-top: 14px;
  padding-bottom: 5px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};

  &:first-child {
    border-top: 0px;
  }
`;

export default WebtoonAllReviewItem;

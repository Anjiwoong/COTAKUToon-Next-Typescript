import styled from 'styled-components';
import { StartBg } from '../webtoonInfo/webtoonInfoBody/WebtoonStarRate';
import CommentInfo from './CommentInfo';
import ReviewerInfo from './ReviewerInfo';

const WebtoonAllReviewItem = () => {
  return (
    <ReviewItem>
      <ReviewerInfo />
      <CommentInfo />
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

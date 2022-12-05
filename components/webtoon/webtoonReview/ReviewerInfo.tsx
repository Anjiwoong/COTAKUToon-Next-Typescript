import styled from 'styled-components';

import { ReviewTypes } from '../../../types/webtoon/review-types';

import { StartBg } from '../webtoonInfo/webtoonInfoBody/WebtoonStarRate';

const ReviewerInfo = ({ userId, date, starRating }: ReviewTypes) => {
  const reviewer = userId?.slice(0, 3) + '***';

  return (
    <ReviewInfo>
      <StartBg rate={starRating}>
        <span></span>
      </StartBg>
      <Reviewer>{reviewer}</Reviewer>
      <Date>{date}</Date>
    </ReviewInfo>
  );
};

const ReviewInfo = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  flex-shrink: 0;
  width: 115px;
  padding-top: 3px;
`;

const Reviewer = styled.span`
  font-size: 12px;
  margin-top: 5px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.myTitle};
`;

const Date = styled.span`
  margin-top: 7px;
  padding-bottom: 4px;
  color: ${({ theme }) => theme.colors.fontGray2};
  font-size: 12px;
`;

export default ReviewerInfo;

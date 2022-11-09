import styled from 'styled-components';
import { StartBg } from '../webtoonInfo/webtoonInfoBody/WebtoonStarRate';

const ReviewerInfo = () => {
  return (
    <ReviewInfo>
      <StartBg>
        <span></span>
      </StartBg>
      <Reviewer>reviewer</Reviewer>
      <Date>2022.11.07</Date>
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
  margin-top: 10px;
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

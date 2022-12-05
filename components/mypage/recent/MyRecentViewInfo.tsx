import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

import { DataTypes } from '../../../types/common/webtoon-types';

const MyRecentViewInfo = ({ author, rating, views }: DataTypes) => {
  return (
    <>
      <Author>{author}</Author>
      <p>
        <RatingSection>
          <AiFillStar />
          {rating}
        </RatingSection>
        <ViewSection>{views}명</ViewSection>
      </p>
    </>
  );
};

const Author = styled.p`
  ${({ theme }) => theme.mixins.ellipsisLine()};
  margin-top: 3px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  line-height: 18px;
`;

const RatingSection = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red};

  svg {
    transform: translateY(2px);
  }
`;

const ViewSection = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fontGray3};
  font-weight: 400;
  margin-left: 4px;
`;

export default MyRecentViewInfo;

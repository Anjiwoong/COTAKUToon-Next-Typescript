import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

interface dummyProps {
  author: string;
  rating: number;
  view: string;
}

const MyRecentViewInfo = (props: dummyProps) => {
  return (
    <>
      <Author>{props.author}</Author>
      <p>
        <RatingSection>
          <AiFillStar />
          {props.rating}
        </RatingSection>
        <ViewSection>{props.view}명</ViewSection>
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
`;

const ViewSection = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fontGray3};
  font-weight: 400;
  margin-left: 4px;
`;

export default MyRecentViewInfo;

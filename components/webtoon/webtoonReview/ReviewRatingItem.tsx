import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/ai';

const ReviewRatingItem = () => {
  return (
    <RatingItem>
      <AiTwotoneStar />
      <span>5</span>
      <ScoreWrap>
        <span></span>
      </ScoreWrap>
    </RatingItem>
  );
};

const RatingItem = styled.li`
  ${({ theme }) => theme.mixins.flexCenter()};
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.fontGray2};
  font-size: 12px;
  font-weight: 700;

  svg {
    font-size: 11px;
  }

  &:nth-child(1) {
    span > span {
      width: 84%;
    }
  }

  &:nth-child(2) {
    span > span {
      width: 50%;
    }
  }

  &:nth-child(3) {
    span > span {
      width: 71%;
    }
  }

  &:nth-child(4) {
    span > span {
      width: 20%;
    }
  }

  &:last-child {
    span > span {
      width: 10%;
    }
  }
`;

const ScoreWrap = styled.span`
  display: inline-block;
  width: 72px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.bgBarGray1};
  margin-left: 6px;
  box-shadow: inset 0 1px 1px 0 rgb(0 0 0 / 10%);

  span {
    display: block;
    width: 0;
    height: 8px;
    background: ${({ theme }) => theme.colors.fontSkyBlue}
      linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.bgBarGray2},
        ${({ theme }) => theme.colors.bgBarGray3}
      );
  }
`;

export default ReviewRatingItem;

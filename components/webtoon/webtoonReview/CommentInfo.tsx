import styled from 'styled-components';

import { ReviewTypes } from '../../../types/review-types';

import Button from '../../UI/Button';
import { AiFillMessage } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';

const CommentInfo = ({ comment }: ReviewTypes) => {
  return (
    <Wrapper>
      <pre>{comment}</pre>
      <ButtonWrapper>
        <CommentButton>
          <AiFillMessage />
          댓글
        </CommentButton>
        <LikeButton>
          <AiFillLike />0
        </LikeButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'space-between', 'stretch', 'nowrap')};
  flex-grow: 1;
  padding-top: 6px;

  pre {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.myTitle};
    width: 100%;
    line-height: 1.5;
    white-space: pre-wrap;
    padding-bottom: 10px;
  }
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  transition: background-color 0.2s, color 0.2s;
  font-weight: 700;
  font-size: 11px;

  svg {
    margin-right: 2px;
    font-size: 11px;
  }
`;

const CommentButton = styled(Button)`
  margin-right: 3px;
  padding: 6px 14px;
  color: ${({ theme }) => theme.colors.fontGray2};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.borderGray2};
  }
`;

const LikeButton = styled(Button)`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.fontGray2};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 6px 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.borderGray2};
  }
`;

export default CommentInfo;

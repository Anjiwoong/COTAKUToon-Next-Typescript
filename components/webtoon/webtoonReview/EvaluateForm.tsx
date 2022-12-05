import { ChangeEvent, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { SetCommentTypes } from '../../../types/webtoon/add-review-types';

import Button from '../../UI/Button';

const EvaluateForm = ({
  comment,
  setCommentHandler,
  starRate,
}: SetCommentTypes) => {
  const [active, setActive] = useState<{ rating: boolean; comment: boolean }>({
    rating: false,
    comment: false,
  });

  useEffect(() => {
    if (starRate !== 0) setActive(prev => ({ ...prev, rating: true }));
    else setActive({ comment: false, rating: false });
  }, [starRate]);

  const changeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim() !== '')
      setActive(prev => ({ ...prev, comment: true }));
    else setActive(prev => ({ ...prev, comment: false }));
    setCommentHandler(e.target.value);
  };

  return (
    <>
      <ReviewTextArea
        title="리뷰 입력"
        placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
        onChange={changeCommentHandler}
        value={comment}
      ></ReviewTextArea>
      <ButtonWrapper>
        <ReviewButton active={active.comment && active.rating} type="submit">
          리뷰 남기기
        </ReviewButton>
      </ButtonWrapper>
    </>
  );
};

const ReviewTextArea = styled.textarea`
  max-width: 605px;
  min-width: 605px;
  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 112px;
  font-weight: 700;
  font-size: 13px;
  padding: 12px 15px;
  color: ${({ theme }) => theme.colors.primaryFont};
  resize: none;
  margin-top: 18px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.borderGray7};
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const ReviewButton = styled(Button)`
  float: right;
  letter-spacing: -0.03em;
  border-radius: 4px;
  font-weight: 700;
  transition: background-color 0.2s, color 0.2s;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
  box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);
  font-size: 12px;
  padding: 8px 18px;
  background: ${({ theme }) => theme.colors.blue};

  ${(props: { active: boolean }) =>
    !props.active &&
    css`
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        background: ${({ theme }) => theme.colors.blue};
      }
    `}
`;

export default EvaluateForm;

import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { reviewState } from '../../../states/reviewState';

import EvaluateForm from './EvaluateForm';
import EvaluateRate from './EvaluateRate';

const EvaluateWebtoon = () => {
  const [starRate, setStarRate] = useState<number>(0);
  const [starHovered, setStarHovered] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const setReviewList = useSetRecoilState(reviewState);
  const { data: session } = useSession();

  const setStarRateHandler = (star: number) => setStarRate(star);
  const setCommentHandler = (comment: string) => setComment(comment);

  const addReviewHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session) {
      alert('로그인 후에 작성할 수 있습니다.');
      return;
    }

    setReviewList(prev => [
      {
        id: prev.length + 1,
        userId: session.user?.name,
        comment: comment,
        starRating: starRate,
      },
      ...prev,
    ]);

    setComment('');
    setStarRate(0);
    setStarHovered(0);
  };

  return (
    <FormWrapper onSubmit={addReviewHandler}>
      <EvaluateRate
        starRate={starRate}
        setStarRateHandler={setStarRateHandler}
        starHovered={starHovered}
        setStarHovered={setStarHovered}
      />
      <EvaluateForm
        comment={comment}
        setCommentHandler={setCommentHandler}
        starRate={starRate}
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  flex-grow: 1;
  margin-top: 14px;
`;

export default EvaluateWebtoon;

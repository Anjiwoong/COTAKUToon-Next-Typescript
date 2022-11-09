import React from 'react';
import styled from 'styled-components';
import WebtoonAllReviewItem from './WebtoonAllReviewItem';

const WebtoonAllReview = () => {
  return (
    <ReviewListWrap>
      <AllReviewTitle>전체리뷰</AllReviewTitle>
      <ul>
        <WebtoonAllReviewItem />
      </ul>
    </ReviewListWrap>
  );
};

const ReviewListWrap = styled.div`
  margin-top: 40px;
`;

const AllReviewTitle = styled.span`
  display: block;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
  padding-bottom: 10px;
  padding-left: 5px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontGray7};
`;

export default WebtoonAllReview;

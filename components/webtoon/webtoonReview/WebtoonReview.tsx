import styled from 'styled-components';
import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';
import WebtoonAllReview from './WebtoonAllReview';
import WriteReviewSection from './WriteReviewSection';

const WebtoonReview = () => {
  return (
    <ReviewWrap>
      <ArticleMiddleTitle>리뷰</ArticleMiddleTitle>
      <div>
        <WriteReviewSection />
        <WebtoonAllReview />
      </div>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 50px 29px 0;
`;

export default WebtoonReview;
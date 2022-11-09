import styled from 'styled-components';
import EvaluateWebtoon from './EvaluateWebtoon';
import ReviewRating from './ReviewRating';

const WriteReviewSection = () => {
  return (
    <Wrapper>
      <ReviewRating />
      <EvaluateWebtoon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
`;

export default WriteReviewSection;

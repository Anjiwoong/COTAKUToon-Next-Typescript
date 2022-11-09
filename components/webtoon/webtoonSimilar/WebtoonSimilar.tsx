import styled from 'styled-components';
import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';
import WebtoonSimilarItem from './WebtoonSimilarItem';

const WebtoonSimilar = () => {
  return (
    <SimilarWrapper>
      <ArticleMiddleTitle>이 작품과 함께 둘러본 작품</ArticleMiddleTitle>
      <ul>
        <WebtoonSimilarItem />
      </ul>
    </SimilarWrapper>
  );
};

const SimilarWrapper = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 50px 29px 0;

  ul {
    display: block;
    margin: 15px 15px;
  }
`;

export default WebtoonSimilar;

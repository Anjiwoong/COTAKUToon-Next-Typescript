import styled from 'styled-components';
import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';
import WebtoonKeywordItem from './WebtoonKeywordItem';

const WebtoonKeyword = () => {
  return (
    <Keyword>
      <ArticleMiddleTitle>이 책의 키워드</ArticleMiddleTitle>
      <ul>
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
        <WebtoonKeywordItem />
      </ul>
    </Keyword>
  );
};

const Keyword = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 50px 29px 0;

  ul {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'stretch', 'wrap')};
    transition: background-color 0.2s;
    margin-top: 15px;
  }
`;

export default WebtoonKeyword;

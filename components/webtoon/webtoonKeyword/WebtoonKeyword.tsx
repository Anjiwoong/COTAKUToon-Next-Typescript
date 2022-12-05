import styled from 'styled-components';

import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';
import WebtoonKeywordItem from './WebtoonKeywordItem';

// prettier-ignore
const keywords = [
  '#로맨스', '#로맨스판타지', '#판타지/SF',
  '#시대/역사물', '#서양배경', '#금지된사랑',
  '#왕족/귀족', '#다정남주', '#순정남주',
  '#진지함', '#원작소설有', '#연재',
];

const WebtoonKeyword = () => {
  return (
    <Keyword>
      <ArticleMiddleTitle>이 책의 키워드</ArticleMiddleTitle>
      <ul>
        {keywords.map(keyword => (
          <WebtoonKeywordItem key={keyword} keyword={keyword} />
        ))}
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

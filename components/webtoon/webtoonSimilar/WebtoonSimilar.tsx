import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DataTypes } from '../../../types/webtoon-types';

import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';
import WebtoonSimilarItem from './WebtoonSimilarItem';

const WebtoonSimilar = ({ webtoon }: { webtoon: DataTypes[] }) => {
  const [randomWebtoon, setRandomWebtoon] = useState<DataTypes[]>([]);
  const randomData = webtoon.sort(() => Math.random() - 0.5).slice(0, 7);

  useEffect(() => {
    setRandomWebtoon(prev => [...prev, ...randomData]);
  }, []);

  return (
    <SimilarWrapper>
      <ArticleMiddleTitle>이 작품과 함께 둘러본 작품</ArticleMiddleTitle>
      <ul>
        {randomWebtoon.map((data: DataTypes) => (
          <WebtoonSimilarItem key={data.id} cover={data.cover} id={data.id} />
        ))}
      </ul>
    </SimilarWrapper>
  );
};

const SimilarWrapper = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 50px 29px 0;

  ul {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'wrap')};
    margin-top: 20px;
  }

  li {
    margin: 15px 15px;
  }
`;

export default WebtoonSimilar;

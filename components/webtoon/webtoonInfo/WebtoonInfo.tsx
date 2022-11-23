import styled from 'styled-components';

import { DataTypes } from '../../../types/webtoon-types';
import WebtoonInfoBody from './webtoonInfoBody/WebtoonInfoBody';
import WebtoonInfoFooter from './webtoonInfoFooter/WebtoonInfoFooter';

const WebtoonInfo = ({ webtoon }: { webtoon: DataTypes }) => {
  return (
    <BookInfo>
      <WebtoonInfoBody webtoon={webtoon} />
      <WebtoonInfoFooter />
    </BookInfo>
  );
};

const BookInfo = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 40px 29px;
`;

export default WebtoonInfo;

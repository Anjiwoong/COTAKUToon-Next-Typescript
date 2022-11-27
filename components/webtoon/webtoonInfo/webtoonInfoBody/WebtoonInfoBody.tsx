import styled from 'styled-components';

import { DataTypes } from '../../../../types/webtoon-types';

import WebtoonDetail from './WebtoonDetail';
import WebtoonThumbnail from './WebtoonThumbnail';

const WebtoonInfoBody = ({ webtoon }: { webtoon: DataTypes }) => {
  return (
    <BookInfoBodyWrapper>
      <WebtoonThumbnail cover={webtoon.cover} />
      <WebtoonDetail webtoon={webtoon} />
    </BookInfoBodyWrapper>
  );
};

const BookInfoBodyWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'nowrap')};
`;

export default WebtoonInfoBody;

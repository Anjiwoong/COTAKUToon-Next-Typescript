import { useState } from 'react';
import styled, { css } from 'styled-components';

import { WebtoonSeriesListTypes } from '../../../types/webtoon/webtoon-series-types';

import Button from '../../UI/Button';
import WebtoonSeriesItem from './WebtoonSeriesItem';
import { GoTriangleDown } from 'react-icons/go';

const WebtoonSeriesList = ({
  id,
  title,
  cover,
  webtoonSeries,
}: WebtoonSeriesListTypes) => {
  const [view, setView] = useState<boolean>(false);

  const viewMoreHandler = () => setView(true);

  return (
    <>
      <SeriesList more={view}>
        {webtoonSeries?.map(webtoon => (
          <WebtoonSeriesItem
            key={webtoon}
            id={id}
            title={title}
            cover={cover}
            series={webtoon}
          />
        ))}
      </SeriesList>
      {!view && (
        <ViewAllButton onClick={viewMoreHandler}>
          더보기
          <GoTriangleDown />
        </ViewAllButton>
      )}
    </>
  );
};

const SeriesList = styled.ul`
  height: 790px;
  overflow: hidden;

  ${(props: { more: boolean }) =>
    props.more &&
    css`
      height: auto;
      overflow: visible;
    `}
`;

const ViewAllButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  font-size: 13px;
  padding: 10px;
  border-width: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontGray2};

  svg {
    font-size: 14px;
    margin-left: 4px;
    transform: translateY(2px);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderGray2};
  }
`;

export default WebtoonSeriesList;

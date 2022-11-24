import { useState } from 'react';
import styled, { css } from 'styled-components';

import { WebtoonSeriesTypes } from '../../../types/webtoon-series-types';

import WebtoonSeriesList from './WebtoonSeriesList';
import WebtoonSeriesOption from './WebtoonSeriesOption';

const webtoonSeries = [...Array(20)].map((_, i) => i + 1);

const WebtoonSeries = ({ title, cover }: WebtoonSeriesTypes) => {
  const [rental, setRental] = useState<boolean>(true);

  const rentalHandler = () => setRental(true);
  const purchaseHandler = () => setRental(false);

  return (
    <SeriesWrapper>
      <WebtoonSeriesTabList>
        <li>
          <RentalTitle active={rental} onClick={rentalHandler}>
            대여하기
          </RentalTitle>
          <WebtoonSeriesOption rental={rental} series={webtoonSeries.length} />
          <WebtoonSeriesList
            title={title}
            cover={cover}
            webtoonSeries={webtoonSeries}
          />
        </li>
        <li>
          <RentalTitle active={!rental} onClick={purchaseHandler}>
            소장하기
          </RentalTitle>
        </li>
      </WebtoonSeriesTabList>
    </SeriesWrapper>
  );
};

const SeriesWrapper = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 0 29px;
`;

const WebtoonSeriesTabList = styled.ul`
  position: relative;
  border-top: 2px solid ${({ theme }) => theme.colors.secondaryFont};

  li {
    :nth-child(1) {
      background: ${({ theme }) => theme.colors.white};
      border: none;

      h2 {
        left: 0;
      }
    }

    :nth-child(2) {
      h2 {
        right: 0;
      }
    }
  }
`;

const TabTitle = styled.h2`
  display: block;
  width: 50%;
  height: 51px;
  background: ${({ theme }) => theme.colors.gray4};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
  line-height: 51px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const RentalTitle = styled(TabTitle)`
  position: absolute;
  top: 0;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};

  ${(props: { active: boolean }) =>
    props.active &&
    css`
      position: absolute;
      top: 0;

      background: ${({ theme }) => theme.colors.white};
      border: none;
    `}
`;

export default WebtoonSeries;

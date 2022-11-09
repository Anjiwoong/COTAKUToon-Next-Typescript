import React from 'react';
import styled from 'styled-components';
import WebtoonSeriesList from './WebtoonSeriesList';
import WebtoonSeriesOption from './WebtoonSeriesOption';

const WebtoonSeries = () => {
  return (
    <SeriesWrapper>
      <WebtoonSeriesTabList>
        <li>
          <RentalTitle>대여하기</RentalTitle>
          <WebtoonSeriesOption />
          <WebtoonSeriesList />
        </li>

        <li>
          <PurchaseTitle>소장하기</PurchaseTitle>
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
  left: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.gray1};
  background: ${({ theme }) => theme.colors.white};
  border: none;
`;

const PurchaseTitle = styled(TabTitle)`
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid solid ${({ theme }) => theme.colors.gray};
`;

export default WebtoonSeries;

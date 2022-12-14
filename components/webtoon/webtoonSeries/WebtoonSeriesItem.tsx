import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { rentalCheckListState } from '../../../states/rentalCheckListState';
import { SeriesItemTypes } from '../../../types/webtoon/webtoon-series-types';

import CustomCheckbox from '../../Layout/CustomCheckbox';
import Button from '../../UI/Button';

const WebtoonSeriesItem = ({ id, title, cover, series }: SeriesItemTypes) => {
  const [checkList, setCheckList] = useRecoilState(rentalCheckListState);

  const checkHandler = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (target.checked) setCheckList(prev => [...prev, series]);
      else setCheckList(prev => prev.filter(num => num !== series));
    },
    [checkList]
  );

  const isChecked = checkList.includes(series);

  return (
    <SeriesItem>
      <label>
        <SeriesWrapLeft>
          <CustomCheckbox onChange={checkHandler} checked={isChecked} />
          <ThumbnailLink href={`/webtoon/${id}/ep${series}`}>
            <Image
              src={`/images/${cover}`}
              alt="웹툰 회차 표지"
              width={40}
              height={58}
              priority
            />
          </ThumbnailLink>
          <div>
            <Link href={`/webtoon/${id}/ep${series}`}>
              <TitleWrap>
                <Badge>무료</Badge>
                <Title>
                  {title} {series}화
                </Title>
              </TitleWrap>
              <DescriptionWrap>
                <span>2022.12.01</span>
                <span>14MB</span>
              </DescriptionWrap>
            </Link>
          </div>
        </SeriesWrapLeft>
        <Link href={`/webtoon/${id}/ep${series}`}>
          <ViewButton>보기</ViewButton>
        </Link>
      </label>
    </SeriesItem>
  );
};

const SeriesItem = styled.li`
  label {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
    padding: 10px 20px 10px 10px;
    transition: background-color 0.2s;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray2};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.gray3};
    }
  }
`;

const SeriesWrapLeft = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
`;

const ThumbnailLink = styled(Link)`
  max-width: 40px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 12px;
`;

const TitleWrap = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
`;

const Badge = styled.span`
  padding: 1px 3px;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  margin-right: 5px;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const DescriptionWrap = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 12px;
  margin-top: 4px;
  font-weight: 400;

  span {
    &:nth-child(1) {
      &::after {
        content: '';
        display: inline-block;
        width: 0.0625rem;
        height: 0.6875rem;
        background-color: ${({ theme }) => theme.colors.gray2};
        margin: 0 6px;
      }
    }
  }
`;

const ViewButton = styled(Button)`
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.fontGray2};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
  font-weight: 700;
  letter-spacing: -0.3px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default WebtoonSeriesItem;

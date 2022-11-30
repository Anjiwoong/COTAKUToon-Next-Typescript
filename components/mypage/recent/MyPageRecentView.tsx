import { useState } from 'react';
import styled from 'styled-components';
import { removeRecentWebtoon } from '../../../lib/remove-recent-webtoon';

import { RemoveRecentTypes } from '../../../types/recent-webtoon-types';

import Button from '../../UI/Button';
import MyPageRecentViewItem from './MyPageRecentViewItem';

const MyPageRecentView = ({ recent, id, removeHandler }: RemoveRecentTypes) => {
  const removeRecentHandler = async () => {
    try {
      const result = await removeRecentWebtoon(id);
      removeHandler([]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ClearButtonWrap>
        <ClearButton onClick={removeRecentHandler}>전체 삭제</ClearButton>
      </ClearButtonWrap>
      <RecentViewList>
        {recent?.map(webtoon => (
          <MyPageRecentViewItem
            key={webtoon.title}
            id={webtoon.id}
            title={webtoon.title}
            author={webtoon.author}
            cover={webtoon.cover}
            freeEpisode={webtoon.freeEpisode}
            category={webtoon.category}
            rating={webtoon.rating}
            views={webtoon.views}
          />
        ))}
      </RecentViewList>
    </div>
  );
};

const ClearButtonWrap = styled.div`
  text-align: end;
  padding-right: 17px;
`;

const ClearButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 7px;
  padding: 7px 17px;
  color: ${({ theme }) => theme.colors.fontGray2};
`;

const RecentViewList = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'stretch', 'wrap')};
  margin-top: 30px;
  gap: 50px;
`;

export default MyPageRecentView;

import { useState } from 'react';
import styled from 'styled-components';

import { RecentTypes } from '../../../types/mypage/recent-webtoon-types';

import MyPageRecentEmptyView from './MyPageRecentEmptyView';
import MyPageRecentView from './MyPageRecentView';

const MyPageRecent = ({ recent, id }: RecentTypes) => {
  const [recentWebtoon, setRecentWebtoon] = useState(recent);

  const removeHandler = () => setRecentWebtoon(undefined);

  return (
    <RecentSection>
      <article>
        <Title>최근 조회한 작품</Title>
        {!recentWebtoon && <MyPageRecentEmptyView />}
        {recentWebtoon && (
          <MyPageRecentView
            recent={recentWebtoon}
            id={id}
            removeHandler={removeHandler}
          />
        )}
      </article>
    </RecentSection>
  );
};

const RecentSection = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-size: 22px;
  font-weight: 600;
`;

export default MyPageRecent;

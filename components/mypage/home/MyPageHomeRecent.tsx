import styled from 'styled-components';

import { DataTypes } from '../../../types/webtoon-types';

import MyPageHomeEmptyRecent from './MyPageHomeEmptyRecent';
import MyPageHomeRecentHeader from './MyPageHomeRecentHeader';
import MyPageHomeRecentItem from './MyPageHomeRecentItem';

const MyPageHomeRecent = ({ recent }: { recent?: DataTypes[] }) => {
  return (
    <RecentViewWrapper>
      <MyPageHomeRecentHeader />
      {!recent?.length && <MyPageHomeEmptyRecent />}
      {recent?.length !== 0 && (
        <RecentBookList>
          {recent?.map(data => (
            <MyPageHomeRecentItem
              key={data.title}
              id={data.id}
              title={data.title}
              author={data.author}
              cover={data.cover}
            />
          ))}
        </RecentBookList>
      )}
    </RecentViewWrapper>
  );
};

const RecentViewWrapper = styled.article`
  margin-top: 40px;
  max-width: 717px;
  overflow: hidden;
`;

const RecentBookList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()};
  gap: 40px;
  overflow: hidden;
  margin-top: 20px;
`;

export default MyPageHomeRecent;

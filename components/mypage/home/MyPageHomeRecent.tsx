import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

import useWebtoon from '../../../hooks/use-webtoon';
import { DataTypes } from '../../../types/common/webtoon-types';

import MyPageHomeEmptyRecent from './MyPageHomeEmptyRecent';
import MyPageHomeRecentHeader from './MyPageHomeRecentHeader';
import MyPageHomeRecentItem from './MyPageHomeRecentItem';

const MyPageHomeRecent = () => {
  const { recent, isLoading } = useWebtoon();

  return (
    <RecentViewWrapper>
      <MyPageHomeRecentHeader />
      {!recent?.length && !isLoading && <MyPageHomeEmptyRecent />}
      {recent?.length !== 0 && (
        <RecentBookList>
          {recent?.map((data: DataTypes) => (
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
      {isLoading && (
        <LoadingSpinner>
          <ClipLoader color="#1e9eff" size={60} />
        </LoadingSpinner>
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

const LoadingSpinner = styled.div`
  ${({ theme }) => theme.mixins.flexCenter()};

  height: 150px;
`;

export default MyPageHomeRecent;

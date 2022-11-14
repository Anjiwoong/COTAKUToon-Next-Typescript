import styled from 'styled-components';
import MyPageHomeEmptyRecent from './MyPageHomeEmptyRecent';
import MyPageHomeRecentHeader from './MyPageHomeRecentHeader';
import MyPageHomeRecentItem from './MyPageHomeRecentItem';

const dummy_data = [
  {
    title: '상수리나무 아래',
    author: '서말, 다우',
    image: '/images/cover/bookcover05.webp',
  },
];

const MyPageHomeRecent = () => {
  return (
    <RecentViewWrapper>
      <MyPageHomeRecentHeader />
      {!dummy_data.length && <MyPageHomeEmptyRecent />}
      {dummy_data.length !== 0 && (
        <RecentBookList>
          {dummy_data.map(data => (
            <MyPageHomeRecentItem
              key={data.title}
              title={data.title}
              author={data.author}
              image={data.image}
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

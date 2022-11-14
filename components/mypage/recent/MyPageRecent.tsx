import styled from 'styled-components';
import MyPageRecentEmptyView from './MyPageRecentEmptyView';
import MyPageRecentView from './MyPageRecentView';

const dummy_data = [
  {
    title: '상수리나무 아래',
    author: '서말, 다우',
    image: '/images/cover/bookcover05.webp',
    episode: 4,
    free: true,
    rating: 4.8,
    view: '6,132',
  },
  {
    title: '허를몽',
    author: '인이도',
    image: '/images/cover/bookcover06.webp',
    episode: 3,
    free: false,
    rating: 4.9,
    view: '4,242',
  },
];

const MyPageRecent = () => {
  return (
    <RecentSection>
      <article>
        <Title>최근 조회한 작품</Title>
        {!dummy_data.length && <MyPageRecentEmptyView />}
        {dummy_data.length !== 0 && <MyPageRecentView data={dummy_data} />}
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

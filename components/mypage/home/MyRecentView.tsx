import styled from 'styled-components';
import EmptyRecentView from './EmptyRecentView';
import MyRecentViewHeader from './MyRecentViewHeader';
import MyRecentViewItem from './MyRecentViewItem';

const dummy_data = [
  {
    title: '상수리나무 아래',
    author: '서말, 다우',
    image: '/images/cover/bookcover05.webp',
  },
];

const MyRecentView = () => {
  return (
    <RecentViewWrapper>
      <MyRecentViewHeader />
      {!dummy_data.length && <EmptyRecentView />}
      {dummy_data.length && (
        <RecentBookList>
          {dummy_data.map(data => (
            <MyRecentViewItem
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

export default MyRecentView;

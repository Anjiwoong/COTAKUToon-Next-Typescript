import styled from 'styled-components';
import Button from '../../UI/Button';
import MyPageRecentViewItem from './MyPageRecentViewItem';

interface dummyProps {
  data: {
    title: string;
    author: string;
    image: string;
    episode: number;
    free: boolean;
    rating: number;
    view: string;
  }[];
}

const MyPageRecentView = (props: dummyProps) => {
  return (
    <div>
      <ClearButtonWrap>
        <ClearButton>전체 삭제</ClearButton>
      </ClearButtonWrap>
      <RecentViewList>
        {props.data.map(webtoon => (
          <MyPageRecentViewItem
            key={webtoon.title}
            title={webtoon.title}
            author={webtoon.author}
            image={webtoon.image}
            episode={webtoon.episode}
            free={webtoon.free}
            rating={webtoon.rating}
            view={webtoon.view}
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

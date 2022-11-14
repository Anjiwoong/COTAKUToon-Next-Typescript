import Link from 'next/link';
import styled from 'styled-components';
import MyPageRecentViewImage from './MyPageRecentViewImage';
import MyRecentViewInfo from './MyRecentViewInfo';

interface dummyProps {
  title: string;
  author: string;
  image: string;
  episode: number;
  free: boolean;
  rating: number;
  view: string;
}

const MyPageRecentViewItem = (props: dummyProps) => {
  return (
    <ViewItem>
      <MyPageRecentViewImage
        image={props.image}
        free={props.free}
        episode={props.episode}
      />
      <TitleLink href="/webtoon">{props.title}</TitleLink>
      <MyRecentViewInfo
        author={props.author}
        rating={props.rating}
        view={props.view}
      />
    </ViewItem>
  );
};

const ViewItem = styled.li`
  width: 110px;

  p {
    margin-top: 3px;
  }
`;

const TitleLink = styled(Link)`
  ${({ theme }) => theme.mixins.ellipsisLine()};
  display: block;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export default MyPageRecentViewItem;

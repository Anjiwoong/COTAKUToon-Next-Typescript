import Link from 'next/link';
import styled from 'styled-components';
import { DataTypes } from '../../../types/webtoon-types';
import MyPageRecentViewImage from './MyPageRecentViewImage';
import MyRecentViewInfo from './MyRecentViewInfo';

const MyPageRecentViewItem = ({
  id,
  title,
  author,
  cover,
  freeEpisode,
  category,
  rating,
  views,
}: DataTypes) => {
  return (
    <ViewItem>
      <MyPageRecentViewImage
        cover={cover}
        category={category}
        freeEpisode={freeEpisode}
      />
      <TitleLink href={`/webtoon/${id}`}>{title}</TitleLink>
      <MyRecentViewInfo author={author} rating={rating} views={views} />
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

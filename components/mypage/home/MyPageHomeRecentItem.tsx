import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { DataTypes } from '../../../types/common/webtoon-types';

const MyPageHomeRecentItem = ({ id, cover, title, author }: DataTypes) => {
  return (
    <li>
      <Link href={`/webtoon/${id}`}>
        <ThumbnailWrapper>
          <div>
            <Image
              src={`/images/${cover}`}
              alt="최근 조회 웹툰"
              width={108}
              height={155}
              priority
            />
          </div>
        </ThumbnailWrapper>
        <MetadataWrapper>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </MetadataWrapper>
      </Link>
    </li>
  );
};

const ThumbnailWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  position: relative;
  text-align: left;
  width: 110px;
  height: 167px;

  div {
    border: 1px solid ${({ theme }) => theme.colors.gray1};
  }
`;

const MetadataWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  text-align: left;
  margin-top: 3px;
  width: 110px;
`;

const Title = styled.p`
  ${({ theme }) => theme.mixins.ellipsisLine()};
  margin-top: 3px;
  font-weight: 700;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Author = styled.p`
  ${({ theme }) => theme.mixins.ellipsisLine()};
  margin-top: 3px;
  font-weight: 600;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export default MyPageHomeRecentItem;

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface recentProps {
  title: string;
  author: string;
  image: string;
}

const MyPageHomeRecentItem = (props: recentProps) => {
  return (
    <li>
      <Link href="/webtoon">
        <ThumbnailWrapper>
          <div>
            <Image
              src={props.image}
              alt="상수리나무 아래 1화"
              width={108}
              height={155}
              priority
            />
          </div>
        </ThumbnailWrapper>
        <MetadataWrapper>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
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

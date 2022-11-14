import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { BiTimer } from 'react-icons/bi';

interface dummyProps {
  image: string;
  episode: number;
  free: boolean;
}

const MyPageRecentViewImage = (props: dummyProps) => {
  return (
    <WebtoonLink href="/webtoon">
      <div>
        <Image
          src={props.image}
          alt="image"
          width={110}
          height={160}
          priority
        />
        {props.free && (
          <WaitFree>
            <BiTimer />
          </WaitFree>
        )}
        <FreeCount>{props.episode}화 무료</FreeCount>
      </div>
    </WebtoonLink>
  );
};

const WebtoonLink = styled(Link)`
  display: block;
  height: 160px;

  div {
    position: relative;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const WaitFree = styled.span`
  ${({ theme }) => theme.mixins.flexCenter()};
  position: absolute;
  width: 34px;
  height: 34px;
  top: -7px;
  left: -7px;
  font-size: 22px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%);
  color: ${({ theme }) => theme.colors.white};
`;

const FreeCount = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 0;
  border-bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px 0 0 0;
  padding: 7px 6px 5px 6px;
  line-height: 12px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 12px;
`;

export default MyPageRecentViewImage;

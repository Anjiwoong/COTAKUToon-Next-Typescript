import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { SiUpwork } from 'react-icons/si';
import { BiTimeFive } from 'react-icons/bi';
import StarRating from '../../Layout/StarRating';

const WebtoonSectionItem = () => {
  return (
    <CarouselItem>
      <Link href="/webtoon">
        <Thumbnail>
          <Image
            src="/images/cover/bookcover03.webp"
            alt="book-cover"
            width={175}
            height={256}
            priority
          />
          <CarouselInfo>
            <SiUpwork />
            <BiTimeFive />
            <span>2화무</span>
          </CarouselInfo>
        </Thumbnail>
      </Link>
      <TitleLink href="/webtoon">title</TitleLink>
      <Author>author</Author>
      <p>
        <StarRating />
      </p>
    </CarouselItem>
  );
};

const CarouselItem = styled.li`
  width: 16.66%;
  min-width: 180px;
  height: 355px;
  margin-right: 5px;

  ${({ theme }) => theme.media.mobile`
    min-width: 120px;
    height: 249px;
  `}
`;

const Thumbnail = styled.div`
  position: relative;
  width: 177px;
  height: 258px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray1};
  border-radius: 5px;

  ${({ theme }) => theme.media.mobile`
    width: 120px;
    height: 170px;
  `}

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const CarouselInfo = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  position: absolute;
  bottom: 0;

  svg {
    :nth-child(1) {
      ${({ theme }) => theme.mixins.flexCenter()};
      width: 28px;
      height: 28px;
      background: ${({ theme }) => theme.colors.upBtn};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0 0 0 5px;
      padding: 6px 4px;

      ${({ theme }) => theme.media.mobile`
        font-size: 14px;
        width: 23px;
        height: 23px;
      `}
    }

    :nth-child(2) {
      ${({ theme }) => theme.mixins.flexCenter()};
      width: 28px;
      height: 28px;
      background: ${({ theme }) => theme.colors.timeBtn};
      color: ${({ theme }) => theme.colors.white};
      padding: 6px 4px;

      ${({ theme }) => theme.media.mobile`
        font-size: 14px;
        width: 23px;
        height: 23px;
      `}
    }
  }

  span {
    ${({ theme }) => theme.mixins.flexCenter()};
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    height: 28px;
    background: ${({ theme }) => theme.colors.freeBtn};
    padding: 8px 6px;
    border-radius: 0 5px 0 0;

    ${({ theme }) => theme.media.mobile`
      height: 23px;
      font-size: 6px;
    `}
  }
`;

const TitleLink = styled(Link)`
  display: block;
  font-weight: 600;
  margin-bottom: 6px;

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 2px;
    font-size: 13px;
  `}
`;

const Author = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
  margin-bottom: 6px;

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 2px;
    font-size: 12px;
  `}
`;

export default WebtoonSectionItem;
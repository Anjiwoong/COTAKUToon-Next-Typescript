import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';
import styled from 'styled-components';
import { isAdultCheck } from '../../../lib/adult-check';

import { AdultCheckTypes } from '../../../types/adult-check-types';
import StarRatingLayout from '../../Layout/StarRatingLayout';

const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

const RankingSectionItem = ({ webtoon, index, isAdult }: AdultCheckTypes) => {
  const adultCheckHandler = (e: MouseEvent<HTMLInputElement>) => {
    if (isAdult !== undefined) {
      if (!isAdult && webtoon.adult) {
        e.preventDefault();
        alert('미성년자는 볼 수 없는 컨텐츠입니다.');
      }
    }

    if (isAdult === undefined) {
      if (webtoon.adult) {
        e.preventDefault();
        alert('로그인 후, 볼 수 있는 컨텐츠입니다.');
      }
    }
  };

  return (
    <CarouselItem>
      <CarouselLink href={`/webtoon/${webtoon.id}`} onClick={adultCheckHandler}>
        {webtoon.cover && (
          <Image
            src={isAdultCheck(isAdult, webtoon)}
            alt="book-cover"
            width={256}
            height={368}
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        )}
      </CarouselLink>
      <CarouselNum>{index}</CarouselNum>
      <CarouselDesc>
        <Link href={`/webtoon/${webtoon.id}`} onClick={adultCheckHandler}>
          {webtoon.title}
        </Link>
        <CarouselInfo>
          {webtoon.author} &#183; {webtoon.freeEpisode}화 무료
        </CarouselInfo>
        <p>
          <StarRatingLayout rating={webtoon.rating} views={webtoon.views} />
        </p>
      </CarouselDesc>
    </CarouselItem>
  );
};

const CarouselItem = styled.div`
  display: flex;
`;

const CarouselLink = styled(Link)`
  ${({ theme }) => theme.media.mobile`
    width: 60px;
    height: 87px;  
  `}

  img {
    display: block;
    width: 80px;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const CarouselNum = styled.span`
  ${({ theme }) => theme.mixins.flexCenter()};
  width: 80px;
  font-weight: 600;
  font-size: 18px;

  ${({ theme }) => theme.media.mobile`
    font-size: 14px;  
  `}
`;

const CarouselDesc = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'center', 'stretch', 'nowrap')};
  width: 184px;
  margin-right: 26px;

  a {
    font-weight: 500;
    margin-bottom: 8px;

    ${({ theme }) => theme.media.mobile`
      font-size: 14px;  
    `}
  }
`;

const CarouselInfo = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
  margin-bottom: 8px;

  ${({ theme }) => theme.media.mobile`
    font-size: 11px;  
  `}
`;

export default RankingSectionItem;

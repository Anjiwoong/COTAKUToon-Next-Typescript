import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { AdultCheckTypes } from '../../../types/common/adult-check-types';

import {
  addRecentWebtoonHandler,
  isAdultCheck,
} from '../../../lib/adult-check';

const blurDataURL =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

const WebtoonSimilarItem = ({ webtoon, isAdult, id }: AdultCheckTypes) => {
  return (
    <li>
      <Link
        href={`/webtoon/${webtoon.id}`}
        onClick={e => addRecentWebtoonHandler(e, webtoon, isAdult, id)}
      >
        <ThumbnailImage
          src={isAdultCheck(isAdult, webtoon)!}
          alt="thumbnail"
          width={90}
          height={130}
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </Link>
    </li>
  );
};

const ThumbnailImage = styled(Image)`
  width: 90px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 3px;
`;

export default WebtoonSimilarItem;

import { addRecentWebtoon } from './add-recent-webtoon';
import { MouseEvent } from 'react';

import { DataTypes } from '../types/common/webtoon-types';

export const isAdultCheck = (
  isAdult: string | null | undefined,
  webtoon: DataTypes
) => {
  if (isAdult !== undefined) {
    if (isAdult === 'adult') return `/images/${webtoon.cover}`;
    if (webtoon.adult) return '/images/cover/adultThumbnail.png';
    else return `/images/${webtoon.cover}`;
  }

  if (isAdult === undefined) {
    if (webtoon.adult) return '/images/cover/adultThumbnail.png';
    return `/images/${webtoon.cover}`;
  }
};

export const addRecentWebtoonHandler = async (
  e: MouseEvent<HTMLAnchorElement>,
  webtoon: DataTypes,
  isAdult?: string | null,
  id?: string | null
) => {
  if (isAdult !== undefined) {
    if (isAdult === 'kids' && webtoon.adult) {
      e.preventDefault();
      alert('미성년자는 볼 수 없는 컨텐츠입니다.');
      return;
    }

    try {
      const result = await addRecentWebtoon(
        id,
        webtoon.id,
        webtoon.title,
        webtoon.cover,
        webtoon.author,
        webtoon.freeEpisode,
        webtoon.rating,
        webtoon.views,
        webtoon.category
      );
    } catch (error) {
      console.log(error);
    }
  }

  if (isAdult === undefined) {
    if (webtoon.adult) {
      e.preventDefault();
      alert('로그인 후, 볼 수 있는 컨텐츠입니다.');
    }
  }
};

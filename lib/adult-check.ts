import { DataTypes } from '../types/webtoon-types';

export const isAdultCheck = (
  isAdult: boolean | null | undefined,
  webtoon: DataTypes
) => {
  if (isAdult !== undefined) {
    if (isAdult) return `/images/${webtoon.cover}`;
    if (webtoon.adult) return '/images/cover/adultThumbnail.png';
    else return `/images/${webtoon.cover}`;
  }

  if (isAdult === undefined) {
    if (webtoon.adult) return '/images/cover/adultThumbnail.png';
    return `/images/${webtoon.cover}`;
  }
};

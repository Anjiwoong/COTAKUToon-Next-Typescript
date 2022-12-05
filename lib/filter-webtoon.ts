import { DataTypes } from '../types/common/webtoon-types';

export const filterWebtoon = (webtoon: DataTypes[], category: string) => {
  const filteredWebtoon = webtoon.filter(data =>
    data.category?.includes(category)
  );

  return filteredWebtoon;
};

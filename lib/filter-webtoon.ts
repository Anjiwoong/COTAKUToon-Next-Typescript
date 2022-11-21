import { DataTypes } from '../types/webtoon-types';

export const filterWebtoon = (webtoon: DataTypes[], category: string) => {
  const filteredWebtoon = webtoon.filter(data =>
    data.category.includes(category)
  );

  return filteredWebtoon;
};

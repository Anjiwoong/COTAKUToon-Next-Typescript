import fs from 'fs/promises';
import path from 'path';
import { DataTypes } from '../types/common/webtoon-types';

export const getWebtoon = async () => {
  const filePath = path.join(process.cwd(), 'data', 'webtoon.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: DataTypes[] = JSON.parse(jsonData);

  return data;
};

export const getWebtoonById = async (id?: string) => {
  const allWebtoon = await getWebtoon();
  return allWebtoon.find(webtoon => webtoon.id === id);
};

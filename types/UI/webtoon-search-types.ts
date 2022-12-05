import { DataTypes } from '../common/webtoon-types';

export interface WebtoonSearchTypes {
  webtoon: DataTypes;
  isAdult?: string | null;
}

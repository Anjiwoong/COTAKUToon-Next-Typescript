import { DataTypes } from './webtoon-types';

export interface AdultCheckTypes {
  webtoon: DataTypes;
  index?: number;
  isAdult?: boolean | null;
}

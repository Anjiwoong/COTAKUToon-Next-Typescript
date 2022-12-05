import { DataTypes } from './webtoon-types';

export interface AdultCheckTypes {
  webtoon: DataTypes;
  rank?: number;
  isAdult?: string | null;
  id?: string | null;
}

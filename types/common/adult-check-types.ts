import { DataTypes } from './webtoon-types';

export interface AdultCheckTypes {
  webtoon: DataTypes;
  rank?: number;
  isAdult?: boolean | null;
  id?: string | null;
}

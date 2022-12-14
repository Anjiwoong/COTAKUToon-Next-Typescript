import { DataTypes } from '../common/webtoon-types';

export interface DbUserTypes {
  _id: string;
  id: string;
  password: string;
  email: string;
  adult: boolean;
  recentWebtoon: DataTypes[];
}

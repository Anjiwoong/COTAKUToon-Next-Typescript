import { DataTypes } from '../common/webtoon-types';

export interface HeaderTypes {
  sub?: boolean;
  dot?: boolean;
  selected?: boolean;
  webtoon?: DataTypes[];
}

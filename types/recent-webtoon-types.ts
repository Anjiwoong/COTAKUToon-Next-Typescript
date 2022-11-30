import { DataTypes } from './webtoon-types';

export interface RecentWebtoonTypes {
  userId: string | null | undefined;
  id: string;
  title: string;
  cover: string;
  author: string;
  freeEpisode: number;
  rating: number;
  views: string;
  category: string[];
}

export interface RecentTypes {
  recent?: DataTypes[];
  id?: string | null;
}

export interface RemoveRecentTypes extends RecentTypes {
  removeHandler: ([]) => void;
}

export interface DataTypes {
  id?: string;
  title?: string;
  cover?: string;
  author?: string;
  adult?: boolean;
  category?: string[];
  freeEpisode?: number;
  holdOn?: boolean;
  rating?: number;
  up?: boolean;
  views?: string;
}

export interface WebtoonArrTypes {
  webtoon: DataTypes[];
  isAdult?: boolean | null;
}

export interface WebtoonContainerTypes {
  selectedWebtoon: DataTypes;
  webtoon: DataTypes[];
}

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
  title?: IterableIterator<[number, string]>;
}

export interface WebtoonTypes {
  webtoon: DataTypes;
}

export interface IndexTypes extends WebtoonTypes {
  index: number;
}

export interface dataTypes {
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
  webtoon: dataTypes[];
  title?: IterableIterator<[number, string]>;
}

export interface WebtoonTypes {
  webtoon: dataTypes;
}

export interface indexTypes extends WebtoonTypes {
  index: number;
}

export interface WebtoonSeriesListTypes {
  title?: string;
  cover?: string;
  webtoonSeries?: number[];
}

export interface SeriesItemTypes extends WebtoonSeriesListTypes {
  series: number;
}

import { dataTypes } from './../types/webtoon-types';
import { atom, selector } from 'recoil';

export const webtoonState = atom<dataTypes[]>({
  key: 'webtoonState',
  default: [],
});

export const rankingWebtoonSelector = selector({
  key: 'rankingWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('rank')
    );

    return filtered;
  },
});

export const freeWebtoonSelector = selector({
  key: 'freeWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('free')
    );

    return filtered;
  },
});

export const sundayWebtoonSelector = selector({
  key: 'sundayWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('sunday')
    );

    return filtered;
  },
});

export const bestSellerWebtoonSelector = selector({
  key: 'bestSellerWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('bestSeller')
    );

    return filtered;
  },
});

export const highRatingWebtoonSelector = selector({
  key: 'highRatingWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('highRating')
    );

    return filtered;
  },
});

export const bestReviewWebtoonSelector = selector({
  key: 'bestReviewWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('bestReview')
    );

    return filtered;
  },
});

export const switchOnWebtoonSelector = selector({
  key: 'switchOnWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('switchOn')
    );

    return filtered;
  },
});

export const yummyWebtoonSelector = selector({
  key: 'yummyWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('yummy')
    );

    return filtered;
  },
});

export const wantedWebtoonSelector = selector({
  key: 'wantedWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('wanted')
    );

    return filtered;
  },
});

export const waitWebtoonSelector = selector({
  key: 'waitWebtoonSelector',
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('wait')
    );

    return filtered;
  },
});

import { DataTypes } from '../types/common/webtoon-types';
import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

export const webtoonState = atom<DataTypes[]>({
  key: `webtoonState/${v1()}`,
  default: [],
});

export const rankingWebtoonSelector = selector({
  key: `rankingWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('rank')
    );

    return filtered;
  },
});

export const freeWebtoonSelector = selector({
  key: `freeWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('free')
    );

    return filtered;
  },
});

export const sundayWebtoonSelector = selector({
  key: `sundayWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('sunday')
    );

    return filtered;
  },
});

export const bestSellerWebtoonSelector = selector({
  key: `bestSellerWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('bestSeller')
    );

    return filtered;
  },
});

export const highRatingWebtoonSelector = selector({
  key: `highRatingWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('highRating')
    );

    return filtered;
  },
});

export const bestReviewWebtoonSelector = selector({
  key: `bestReviewWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('bestReview')
    );

    return filtered;
  },
});

export const switchOnWebtoonSelector = selector({
  key: `switchOnWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('switchOn')
    );

    return filtered;
  },
});

export const yummyWebtoonSelector = selector({
  key: `yummyWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('yummy')
    );

    return filtered;
  },
});

export const wantedWebtoonSelector = selector({
  key: `wantedWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('wanted')
    );

    return filtered;
  },
});

export const waitWebtoonSelector = selector({
  key: `waitWebtoonSelector/${v1()}`,
  get: ({ get }) => {
    const webtoonList = get(webtoonState);
    const filtered = webtoonList.filter(data =>
      data.category?.includes('wait')
    );

    return filtered;
  },
});

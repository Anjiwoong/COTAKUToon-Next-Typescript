import { atom, selector } from 'recoil';
import { v1 } from 'uuid';

export const rentalNumState = atom<number>({
  key: `rentalNumState/${v1()}`,
  default: 0,
});

export const increaseRentalNumState = selector({
  key: `increaseRentalNumState/${v1()}`, // 고유한 키 값
  get: ({ get }) => {
    const rentalNum = get(rentalNumState);

    return rentalNum + 1;
  },
});

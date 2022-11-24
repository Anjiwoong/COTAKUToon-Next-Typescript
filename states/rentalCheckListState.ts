import { atom } from 'recoil';
import { v1 } from 'uuid';

export const rentalCheckListState = atom<number[]>({
  key: `rentalCheckListState/${v1()}`,
  default: [],
});

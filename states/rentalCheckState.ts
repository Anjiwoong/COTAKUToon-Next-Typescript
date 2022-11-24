import { atom } from 'recoil';
import { v1 } from 'uuid';

export const rentalCheckState = atom<boolean>({
  key: `rentalCheckState/${v1()}`,
  default: false,
});

export const rentalAllCheckState = atom<boolean>({
  key: `rentalAllCheckState/${v1()}`,
  default: false,
});

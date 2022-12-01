import { atom } from 'recoil';
import { v1 } from 'uuid';

export const viewerNavigationState = atom<boolean>({
  key: `viewerNavigationState/${v1()}`,
  default: true,
});

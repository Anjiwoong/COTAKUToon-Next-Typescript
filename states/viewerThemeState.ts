import { atom } from 'recoil';
import { v1 } from 'uuid';

export const viewerThemeState = atom<string>({
  key: `viewerThemeState/${v1()}`,
  default: 'black',
});

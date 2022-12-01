import { atom } from 'recoil';
import { v1 } from 'uuid';

export const viewerSettingState = atom<boolean>({
  key: `viewerSettingState/${v1()}`,
  default: false,
});

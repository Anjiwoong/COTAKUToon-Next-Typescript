import { atom } from 'recoil';
import { v1 } from 'uuid';

export const viewerZoomState = atom<number>({
  key: `viewerZoomState/${v1()}`,
  default: 100,
});

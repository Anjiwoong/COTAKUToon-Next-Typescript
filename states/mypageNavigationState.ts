import { atom } from 'recoil';
import { v1 } from 'uuid';

import { MypageNavigationTypes } from '../types/states/mypage-navigation-types';

export const mypageNavigationState = atom<MypageNavigationTypes[]>({
  key: `mypageNavigationState/${v1()}`,
  default: [
    {
      id: 1,
      category: '마이리디 홈',
      menu: [{ title: '', path: ['/mypage'] }],
    },
    {
      id: 2,
      category: '책',
      menu: [{ title: '최근 조회한 작품', path: ['/mypage/recent'] }],
    },
    {
      id: 3,
      category: '구매/혜택',
      menu: [
        { title: '결제 내역', path: ['/mypage/payment'] },
        {
          title: '리디캐시',
          path: [
            '/mypage/cash',
            '/mypage/cash/auto-charge',
            '/mypage/cash/detail',
            '/mypage/cash/wait',
          ],
        },
      ],
    },
    {
      id: 4,
      category: '개인',
      menu: [
        { title: '1 : 1 문의', path: ['/#'] },
        { title: '정보 변경', path: ['/#'] },
      ],
    },
  ],
});

import { ReviewTypes } from './../types/review-types';
import { atom } from 'recoil';
import { v1 } from 'uuid';

export const reviewState = atom<ReviewTypes[]>({
  key: `reviewState/${v1()}`,
  default: [
    {
      id: 4,
      userId: 'Sasuke',
      date: '2022.10.30',
      comment: '생각보다 내용 전개가 흥미롭네요 ~ 지루함없이 달리고 있어요 !',
      starRating: 4,
    },
    {
      id: 3,
      userId: 'Naruto',
      date: '2022.10.29',
      comment: '재미있게 잘 보고 있습니다',
      starRating: 5,
    },
    {
      id: 2,
      userId: 'Hogwarts',
      date: '2022.09.28',
      comment:
        '딱 포인트 받을만큼만 보려고 했는데... 미친듯 결제하고 있는 내 손가락! 재밌다.',
      starRating: 4,
    },
    {
      id: 1,
      userId: 'jiwoong',
      date: '2022.08.28',
      comment: '작화가 예쁘고 읽기 편해 좋네요 재밌게 읽고 있어요',
      starRating: 4,
    },
  ],
});

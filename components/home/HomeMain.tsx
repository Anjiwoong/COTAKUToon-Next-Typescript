import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import * as webtoon from '../../states/webtoonState';

import CarouselSection from './CarouselSection';
import EventSection from './eventSection/EventSection';
import NewArrivalSection from './newArrivalSection/NewArrivalSection';
import OnlyRidiSection from './onlyRidiSection/OnlyRidiSection';
import RankingSection from './rankingSection/RankingSection';
import WebtoonSection from './webtoonSection/WebtoonSection';

const sectionTitle = [
  '기다리면 무료로 시작해!',
  '일요일 연재',
  '리디에 내리는 #별점 1,000개!',
  '#리뷰, 1,000개가 말하는 띵작!',
  '스위치 ON!, 45화 #FREE',
  '원작도 웹툰도 so yummy',
  '시키는 대로 다 해요, 나.',
  '잠깐! 놓치지 마세요!',
];

const HomeMain = () => {
  const rankingWebtoon = useRecoilValue(webtoon.rankingWebtoonSelector);
  const freeWebtoon = useRecoilValue(webtoon.freeWebtoonSelector);
  const sundayWebtoon = useRecoilValue(webtoon.sundayWebtoonSelector);
  const bestSellerWebtoon = useRecoilValue(webtoon.bestSellerWebtoonSelector);
  const highRatingWebtoon = useRecoilValue(webtoon.highRatingWebtoonSelector);
  const bestReviewWebtoon = useRecoilValue(webtoon.bestSellerWebtoonSelector);
  const switchOnWebtoon = useRecoilValue(webtoon.switchOnWebtoonSelector);
  const yummyWebtoon = useRecoilValue(webtoon.yummyWebtoonSelector);
  const wantedWebtoon = useRecoilValue(webtoon.wantedWebtoonSelector);
  const waitWebtoon = useRecoilValue(webtoon.waitWebtoonSelector);

  const title = sectionTitle.entries();

  return (
    <MainWrapper>
      <CarouselSection />
      <NewArrivalSection />
      <RankingSection webtoon={rankingWebtoon} />
      <WebtoonSection webtoon={freeWebtoon} title={title} />
      <WebtoonSection webtoon={sundayWebtoon} title={title} />
      <RankingSection webtoon={bestSellerWebtoon} />
      <EventSection />
      <WebtoonSection webtoon={highRatingWebtoon} title={title} />
      <WebtoonSection webtoon={bestReviewWebtoon} title={title} />
      <WebtoonSection webtoon={switchOnWebtoon} title={title} />
      <WebtoonSection webtoon={yummyWebtoon} title={title} />
      <WebtoonSection webtoon={wantedWebtoon} title={title} />
      <OnlyRidiSection />
      <WebtoonSection webtoon={waitWebtoon} title={title} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.autoMargin()}
  max-width: 1170px;
`;

export default HomeMain;

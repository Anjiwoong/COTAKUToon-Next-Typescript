import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import * as webtoon from '../../states/webtoonState';
import CarouselSection from './CarouselSection';
import EventSection from './eventSection/EventSection';
import NewArrivalSection from './newArrivalSection/NewArrivalSection';
import OnlyRidiSection from './onlyRidiSection/OnlyRidiSection';
import RankingSection from './rankingSection/RankingSection';
import WebtoonSection from './webtoonSection/WebtoonSection';

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

  return (
    <MainWrapper>
      <CarouselSection />
      <NewArrivalSection />
      <RankingSection webtoon={rankingWebtoon} />
      <WebtoonSection webtoon={freeWebtoon} />
      <WebtoonSection webtoon={sundayWebtoon} />
      <RankingSection webtoon={bestSellerWebtoon} />
      <EventSection />
      <WebtoonSection webtoon={highRatingWebtoon} />
      <WebtoonSection webtoon={bestReviewWebtoon} />
      <WebtoonSection webtoon={switchOnWebtoon} />
      <WebtoonSection webtoon={yummyWebtoon} />
      <OnlyRidiSection />
      <WebtoonSection webtoon={waitWebtoon} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.autoMargin()}
  max-width: 1170px;
`;

export default HomeMain;

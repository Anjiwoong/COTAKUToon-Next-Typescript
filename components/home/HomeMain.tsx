import { useSession } from 'next-auth/react';
import styled from 'styled-components';
import { filterWebtoon } from '../../lib/filter-webtoon';

import { DataTypes } from '../../types/webtoon-types';

import CarouselSection from './carouselSection/CarouselSection';
import EventSection from './eventSection/EventSection';
import NewArrivalSection from './newArrivalSection/NewArrivalSection';
import OnlyRidiSection from './onlyRidiSection/OnlyRidiSection';
import RankingSection from './rankingSection/RankingSection';
import WebtoonSection from './webtoonSection/WebtoonSection';

// const sectionTitle = [
//   '기다리면 무료로 시작해!',
//   '일요일 연재',
//   '리디에 내리는 #별점 1,000개!',
//   '#리뷰, 1,000개가 말하는 띵작!',
//   '스위치 ON!, 45화 #FREE',
//   '원작도 웹툰도 so yummy',
//   '시키는 대로 다 해요, 나.',
//   '잠깐! 놓치지 마세요!',
// ];
// const title = sectionTitle.entries();
const HomeMain = ({ webtoon }: { webtoon: DataTypes[] }) => {
  const { data } = useSession();

  return (
    <MainWrapper>
      <CarouselSection />
      <NewArrivalSection />
      <RankingSection
        webtoon={filterWebtoon(webtoon, 'rank')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'free')}
        id={data?.user?.name}
        isAdult={data?.user?.image}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'sunday')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <RankingSection
        webtoon={filterWebtoon(webtoon, 'bestSeller')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <EventSection />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'highRating')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'bestReview')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'switchOn')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'yummy')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'wanted')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
      <OnlyRidiSection />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'wait')}
        isAdult={data?.user?.image}
        id={data?.user?.name}
      />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.autoMargin()}
  max-width: 1170px;
`;

export default HomeMain;

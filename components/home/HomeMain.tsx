import styled from 'styled-components';
import { filterWebtoon } from '../../lib/filter-webtoon';
import { DataTypes } from '../../types/webtoon-types';

import CarouselSection from './CarouselSection';
import EventSection from './eventSection/EventSection';
import NewArrivalSection from './newArrivalSection/NewArrivalSection';
import OnlyRidiSection from './onlyRidiSection/OnlyRidiSection';
import RankingSection from './rankingSection/RankingSection';
import WebtoonSection from './webtoonSection/WebtoonSection';

const HomeMain = ({ webtoon }: { webtoon: DataTypes[] }) => {
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

  const title = sectionTitle.entries();

  return (
    <MainWrapper>
      <CarouselSection />
      <NewArrivalSection />
      <RankingSection webtoon={filterWebtoon(webtoon, 'rank')} />
      <WebtoonSection webtoon={filterWebtoon(webtoon, 'free')} title={title} />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'sunday')}
        title={title}
      />
      <RankingSection webtoon={filterWebtoon(webtoon, 'bestSeller')} />
      <EventSection />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'highRating')}
        title={title}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'bestReview')}
        title={title}
      />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'switchOn')}
        title={title}
      />
      <WebtoonSection webtoon={filterWebtoon(webtoon, 'yummy')} title={title} />
      <WebtoonSection
        webtoon={filterWebtoon(webtoon, 'wanted')}
        title={title}
      />
      <OnlyRidiSection />
      <WebtoonSection webtoon={filterWebtoon(webtoon, 'wait')} title={title} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.autoMargin()}
  max-width: 1170px;
`;

export default HomeMain;

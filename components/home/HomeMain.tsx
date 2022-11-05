import styled from 'styled-components';
import CarouselSection from './CarouselSection';
import EventSection from './eventSection/EventSection';
import NewArrivalSection from './newArrivalSection/NewArrivalSection';
import OnlyRidiSection from './onlyRidiSection/OnlyRidiSection';
import RankingSection from './rankingSection/RankingSection';
import WebtoonSection from './webtoonSection/WebtoonSection';

const HomeMain = () => {
  return (
    <MainWrapper>
      <CarouselSection />
      <NewArrivalSection />
      <RankingSection />
      <WebtoonSection />
      <WebtoonSection />
      <RankingSection />
      <EventSection />
      <WebtoonSection />
      <WebtoonSection />
      <WebtoonSection />
      <WebtoonSection />
      <OnlyRidiSection />
      <WebtoonSection />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  ${({ theme }) => theme.mixins.autoMargin()}
  max-width: 1170px;
`;

export default HomeMain;

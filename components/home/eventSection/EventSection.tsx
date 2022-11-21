import styled from 'styled-components';
import CarouselButton from '../../Layout/CarouselButton';
import EventSectionItem from './EventSectionItem';

const eventData = [
  {
    title: ['기간 한정 45화 무료! ', '유료로 보면 포인트+'],
    cover: '/images/event/event_switch.webp',
  },
  {
    title: ['<그대 사자의 이름으로> ', ' 31화 UP!'],
    cover: '/images/event/switch_up.webp',
  },
  {
    title: ['8월의 리디 웹툰 미리 맛보기 ', ' 신작이 찾아왔어요!'],
    cover: '/images/event/event_early.webp',
  },
  {
    title: ['KT 결제로 리디캐시 ', ' 충전 시 5천원 할인!'],
    cover: '/images/event/event_cash.webp',
  },
];

const EventSection = () => {
  return (
    <Wrapper>
      <h2>이벤트 보러가기</h2>
      <Carousel>
        <CarouselWrap>
          <CarouselList>
            {eventData.map(data => (
              <EventSectionItem
                key={data.cover}
                title={data.title}
                cover={data.cover}
              />
            ))}
          </CarouselList>
        </CarouselWrap>
        <CarouselButton />
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 40px 30px 0;

  ${({ theme }) => theme.media.mobile`
    margin: 40px 18px 0;
  `}

  h2 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;

    ${({ theme }) => theme.media.mobile`
      margin-bottom: 10px;
    `}
  }
`;

const Carousel = styled.div`
  position: relative;
`;

const CarouselWrap = styled.div`
  overflow: hidden;
`;

const CarouselList = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'nowrap')};
`;

export default EventSection;

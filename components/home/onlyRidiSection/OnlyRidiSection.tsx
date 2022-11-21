import styled from 'styled-components';
import CarouselButton from '../../Layout/CarouselButton';
import OnlyRidiSectionItem from './OnlyRidiSectionItem';

const onlyRidiData = [
  {
    title: ['저주를 받더라도 ', ' 나를 계속 사랑해'],
    sub: '<마귀> 전원 포인트!',
    coverMain: '/images/onlyRidi/devil.webp',
    coverBg: '/images/onlyRidi/devil_bg.webp',
  },
  {
    title: ['가정교사로 온 섬, ', ' 고용주 남매가 수상하다'],
    sub: '마녀가 사는 섬',
    coverMain: '/images/onlyRidi/witch.webp',
    coverBg: '',
  },
  {
    title: ['너를 생각하면 생각할수록 ', ' 나는 고독하고 외로워져'],
    sub: '상수리나무 아래',
    coverMain: '/images/onlyRidi/tree.webp',
    coverBg: '',
  },
  {
    title: ['환상 속 괴물은 ', ' 당신의 어둠을 먹고 자란다'],
    sub: '환상은 밤에 자란다',
    coverMain: '/images/onlyRidi/fantasy.webp',
    coverBg: '/images/onlyRidi/fantasy_bg.webp',
  },
];

const OnlyRidiSection = () => {
  return (
    <Wrapper>
      <h2>오직 리디에서만!</h2>
      <Carousel>
        <CarouselWrap>
          <ul>
            {onlyRidiData.map(data => (
              <OnlyRidiSectionItem
                key={data.sub}
                title={data.title}
                sub={data.sub}
                coverMain={data.coverMain}
                coverBg={data.coverBg}
              />
            ))}
          </ul>
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
  }
`;

const Carousel = styled.div`
  position: relative;

  button {
    :nth-child(1) {
      top: 90px;
    }

    :last-child {
      top: 90px;
    }
  }
`;

const CarouselWrap = styled.div`
  overflow: hidden;

  ul {
    ${({ theme }) => theme.mixins.flexBox()};
    padding-top: 40px;
  }
`;

export default OnlyRidiSection;

import styled from 'styled-components';
import CarouselButton from '../../Layout/CarouselButton';
import RankingSectionItem from './RankingSectionItem';

const RankingSection = () => {
  return (
    <RankWrapper>
      <h2>mainTitle</h2>
      <Carousel>
        <div>
          <CarouselList>
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
            <RankingSectionItem />
          </CarouselList>
        </div>
        <CarouselButton />
      </Carousel>
    </RankWrapper>
  );
};

const RankWrapper = styled.section`
  position: relative;
  margin: 40px 30px 0;

  ${({ theme }) => theme.media.mobile`
    margin: 40px 18px 0;
  `}

  h2 {
    font-weight: 700;
    font-size: 24px;

    ${({ theme }) => theme.media.mobile`
      font-size: 18px;
    `}
  }
`;

const Carousel = styled.div`
  margin-top: 16px;
  overflow: hidden;

  button {
    :nth-child(1) {
      top: 230px;

      ${({ theme }) => theme.media.mobile`
        top: 155.5px;
      `}
    }

    :last-child {
      top: 230px;

      ${({ theme }) => theme.media.mobile`
        top: 155.5px;
      `}
    }
  }
`;

const CarouselList = styled.ol`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'wrap')};
  height: 368px;

  ${({ theme }) => theme.media.mobile`
    height: 273px;
  `}

  li {
    ${({ theme }) => theme.mixins.flexBox()};
    width: 370px;
    height: 116px;
    margin-bottom: 6px;

    ${({ theme }) => theme.media.mobile`
      width: 327px;
      height: 87px;
      margin-bottom: 3px;    
    `}
  }
`;

export default RankingSection;
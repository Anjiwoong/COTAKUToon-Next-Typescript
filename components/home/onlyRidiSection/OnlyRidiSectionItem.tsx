import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const OnlyRidiSectionItem = () => {
  return (
    <Item>
      <Link href="#">
        <Bg>
          <BgImage
            src="/images/onlyRidi/devil_bg.webp"
            alt="only-ridi"
            width={363}
            height={100}
          />
          <MainImage
            src="/images/onlyRidi/devil.webp"
            alt=""
            width={250}
            height={140}
          />
        </Bg>
        <CarouselInfo>
          <CarouselTitle>title</CarouselTitle>
          <CarouselSub>sub</CarouselSub>
        </CarouselInfo>
      </Link>
    </Item>
  );
};

const Item = styled.li`
  margin: 0 3.5px;
  width: calc(33.33% - 7px);
  flex-shrink: 0;

  ${({ theme }) => theme.media.tablet`
    width: calc(50% - 7px);
  `}

  ${({ theme }) => theme.media.mobile`
    width: calc(100% - 7px);
  `}
`;

const Bg = styled.div`
  position: relative;
  height: 100px;
  border-radius: 5px;

  &:nth-child(1) {
    background: ${({ theme }) => theme.colors.ridiRed};
  }

  &:nth-child(2) {
    background: ${({ theme }) => theme.colors.ridiPurple};
  }

  &:nth-child(3) {
    background: ${({ theme }) => theme.colors.ridiYellow1};
  }

  &:last-child {
    background: ${({ theme }) => theme.colors.ridiTurquoise};
  }
`;

const BgImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainImage = styled(Image)`
  ${({ theme }) => theme.mixins.centerTranslateX()};
  position: absolute;
  bottom: 0;
  width: 250px;
`;

const CarouselInfo = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'center', 'nowrap')};
  margin-top: 20px;
`;

const CarouselTitle = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

const CarouselSub = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
`;

export default OnlyRidiSectionItem;

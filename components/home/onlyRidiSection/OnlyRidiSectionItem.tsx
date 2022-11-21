import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { OnlyRidiTypes } from '../../../types/only-ridi-types';

const OnlyRidiSectionItem = ({
  title,
  sub,
  coverMain,
  coverBg,
}: OnlyRidiTypes) => {
  return (
    <Item>
      <Link href="#">
        <Bg>
          {coverBg !== '' && (
            <BgImage src={coverBg} alt="only-ridi" width={408} height={100} />
          )}
          <MainImage src={coverMain} alt="only-ridi" width={250} height={140} />
        </Bg>
        <CarouselInfo>
          <CarouselTitle>
            {title[0]}
            <br />
            {title[1]}
          </CarouselTitle>
          <CarouselSub>{sub}</CarouselSub>
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
  `};

  ${({ theme }) => theme.media.mobile`
    width: calc(100% - 7px);
  `};

  &:nth-child(1) {
    a > div {
      background: ${({ theme }) => theme.colors.ridiRed};
    }
  }

  &:nth-child(2) {
    a > div {
      background: ${({ theme }) => theme.colors.ridiPurple};
    }
  }

  &:nth-child(3) {
    a > div {
      background: ${({ theme }) => theme.colors.ridiYellow1};
    }
  }

  &:nth-child(4) {
    a > div {
      background: ${({ theme }) => theme.colors.ridiTurquoise};
    }
  }
`;

const Bg = styled.div`
  position: relative;
  height: 100px;
  border-radius: 5px;
`;

const BgImage = styled(Image)`
  position: relative;
`;

const MainImage = styled(Image)`
  ${({ theme }) => theme.mixins.centerTranslateX()};
  position: absolute;
  bottom: 0;
  width: 250px;
`;

const CarouselInfo = styled.p`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'center', 'nowrap')};
  margin-top: 20px;
`;

const CarouselTitle = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

const CarouselSub = styled.span`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
`;

export default OnlyRidiSectionItem;

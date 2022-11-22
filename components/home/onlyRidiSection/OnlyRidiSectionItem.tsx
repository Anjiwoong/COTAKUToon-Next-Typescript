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
            <BgImage src={coverBg} alt="only-ridi" width={680} height={112} />
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
  margin: 0 2px;
`;

const Bg = styled.div`
  position: relative;
  height: 100px;
  border-radius: 5px;
`;

const BgImage = styled(Image)`
  position: relative;
  max-width: 100%;
  max-height: 100%;
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

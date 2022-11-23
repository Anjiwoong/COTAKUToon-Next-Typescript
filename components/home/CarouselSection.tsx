import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import CarouselButton from '../Layout/CarouselNextButton';

const CarouselSection = () => {
  return (
    <CarouselWrapper>
      <Inner>
        <ul>
          <CarouselItem>
            <Link href="#">
              <Image
                src="/images/mainCarousel/Carousel01.webp"
                alt="carousel"
                width={1110}
                height={40}
                priority
              />
              <CarouselDesc>
                <CarouselInfo>
                  <span>NEW</span>
                  <span>ONLY</span>
                  <span>리다무</span>
                </CarouselInfo>
                <Title>
                  <span>title</span>
                </Title>
                <SubTitle>
                  <span>subTitle</span>
                </SubTitle>
                <Counter>
                  <span>1</span> / 10
                </Counter>
              </CarouselDesc>
            </Link>
          </CarouselItem>
        </ul>
      </Inner>
      <CarouselButton />
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.section`
  position: relative;
  height: 400px;
  border-radius: 5px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile`
    margin: 18px;
    height: 330px;
  `}
`;

const Inner = styled.div`
  height: 100%;
  overflow: hidden;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const CarouselItem = styled.li`
  min-width: 45px;
  height: 400px;
  margin-left: 8px;
  border-radius: 5px;
  overflow: hidden;

  &:first-child {
    margin-left: 0;
  }

  ${({ theme }) => theme.media.mobile`
    height: 330px;
  `}

  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const CarouselDesc = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  animation-fill-mode: forwards;
  padding-left: 40px;

  ${({ theme }) => theme.media.mobile`
    bottom: 20px;
    padding-left: 20px;
  `}
`;

const CarouselInfo = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}

  span {
    font-size: 11px;
    padding: 4px 6px;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

const Title = styled.div`
  font-size: calc(14px + 1.5vw);
  font-weight: 600;
  margin-top: 8px;
`;

const SubTitle = styled.div`
  margin-top: 6px;
  opacity: 0.8;
  font-size: calc(8.5px + 0.5vw);
`;

const Counter = styled.div`
  position: absolute;
  right: 40px;
  bottom: 0;
  width: fit-content;
  height: 20px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;

  span {
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.media.mobile`
    right: 10px;
    font-size: 11px;
    padding: 0 6px;
  `}
`;

export default CarouselSection;

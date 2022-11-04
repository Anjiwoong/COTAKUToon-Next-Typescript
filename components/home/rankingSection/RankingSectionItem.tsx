import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import StarRating from '../../Layout/StarRating';

const RankingSectionItem = () => {
  return (
    <li>
      <CarouselLink href="/webtoon">
        <Image
          src="/images/cover/bookcover01.webp"
          alt="book-cover"
          width={80}
          height={116}
        />
      </CarouselLink>
      <CarouselNum>1</CarouselNum>
      <CarouselDesc>
        <Link href="/webtoon">title</Link>
        <CarouselInfo>author &#183; 2화 무료</CarouselInfo>
        <p>
          <StarRating />
        </p>
      </CarouselDesc>
    </li>
  );
};

const CarouselLink = styled(Link)`
  ${({ theme }) => theme.media.mobile`
    width: 60px;
    height: 87px;  
  `}

  img {
    display: block;
    width: 80px;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const CarouselNum = styled.span`
  ${({ theme }) => theme.mixins.flexCenter()};
  width: 80px;
  font-weight: 600;
  font-size: 18px;

  ${({ theme }) => theme.media.mobile`
    font-size: 14px;  
  `}
`;

const CarouselDesc = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'center', 'stretch', 'nowrap')};
  width: 184px;
  margin-right: 26px;

  a {
    font-weight: 500;
    margin-bottom: 8px;

    ${({ theme }) => theme.media.mobile`
      font-size: 14px;  
    `}
  }
`;

const CarouselInfo = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
  margin-bottom: 8px;

  ${({ theme }) => theme.media.mobile`
    font-size: 11px;  
  `}
`;

export default RankingSectionItem;

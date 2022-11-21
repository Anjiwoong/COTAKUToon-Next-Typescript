import Link from 'next/link';
import styled from 'styled-components';
import { mypageHomeProps } from '../../../types/mypage-home-props';
import { SiZcash } from 'react-icons/si';
import { MdLocalParking } from 'react-icons/md';
import { MdDoubleArrow } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCoupon3Fill } from 'react-icons/ri';
import Button from '../../UI/Button';

const MyAssetInfoItem = (props: mypageHomeProps) => {
  return (
    <InfoItem>
      <Container>
        <h4>
          <span>{props.title === '리디캐시' && <SiZcash />}</span>
          <span>{props.title === '리디포인트' && <MdLocalParking />}</span>
          <span>{props.title === '쿠폰' && <RiCoupon3Fill />}</span>
          <span>{props.title === '내 서재' && <BiBook />}</span>
          <span>{props.title === '카트' && <BiCart />}</span>
          <span>{props.title === '위시리스트' && <AiOutlineHeart />}</span>
          <Title>{props.title}</Title>
        </h4>
        <Amount>
          <span>{props.amount}</span>
          {props.title === '쿠폰' ||
          props.title === '카트' ||
          props.title === '위시리스트'
            ? '개'
            : props.title === '내 서재'
            ? '권'
            : '원'}
        </Amount>
        <Link href="/#">link</Link>
      </Container>
      {props.title === '리디캐시' && (
        <ExtraInfo>
          <Link href="/myrididetail">
            충전 내역
            <MdDoubleArrow />
          </Link>
        </ExtraInfo>
      )}
      {props.title === '리디포인트' && (
        <ExtraInfo>
          소멸 예정
          <strong>
            <span>0</span>원
          </strong>
        </ExtraInfo>
      )}
      {props.title === '쿠폰' && (
        <ExtraInfo>
          <CouponButton>
            쿠폰 등록
            <MdDoubleArrow />
          </CouponButton>
        </ExtraInfo>
      )}
    </InfoItem>
  );
};

const InfoItem = styled.li`
  display: table-cell;
  text-align: center;
  vertical-align: top;
`;

const Container = styled.div`
  position: relative;
  text-align: center;

  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.secondaryFont};
  }

  a {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    text-indent: -9999px;
    left: 0;
    top: 0;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
  display: block;
  margin-top: 10px;
  line-height: 18px;
`;

const Amount = styled.p`
  ${({ theme }) => theme.mixins.paddingX('10px')};
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.myAssetAmount};
  margin-top: 7px;

  span {
    font-weight: 400;
    font-size: 28px;
    line-height: 33px;
    font-family: 'Roboto';
    vertical-align: -8%;
    padding-right: 2px;
  }
`;

const ExtraInfo = styled.p`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'stretch', 'nowrap')};
  ${({ theme }) => theme.mixins.paddingX('10px')};
  position: relative;
  left: 5px;
  margin-top: 17px;
  font-weight: 600;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.myAssetLink};

  svg {
    transform: translateY(1.3px);
  }

  strong {
    margin-left: 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const CouponButton = styled(Button)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.myAssetLink};
`;

export default MyAssetInfoItem;

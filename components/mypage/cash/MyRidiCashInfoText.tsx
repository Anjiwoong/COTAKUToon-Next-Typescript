import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { MdOutlineDoubleArrow } from 'react-icons/md';

const MyRidiCashInfoText = () => {
  return (
    <TextWrapper>
      <h3>
        복잡한 결제를 <br />
        리디캐시로 간편하게!
      </h3>
      <DescText>
        최대 5% 리디포인트 적립 혜택도 놓치지 마세요!
        <br />한 번 충전하면 결제 정보 입력 없이 쉽게 결제할 수 있는 리디캐시.
      </DescText>
      <Link href="/mypage/cash/auto-charge">
        자동충전 설정
        <MdOutlineDoubleArrow />
      </Link>
      <RidiCashAmount>
        내 리디캐시
        <AmountWon>
          <AmountNum>0</AmountNum>원
        </AmountWon>
      </RidiCashAmount>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  width: 50%;

  h3 {
    font-weight: 400;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.myTitle};
    line-height: 36px;
  }

  a {
    position: relative;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.fontGray2};
    vertical-align: baseline;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    box-shadow: 0 1px 1px rgba (209, 213, 217, 0.3);
    margin-top: 14px;
    padding: 8px 20px 8px 12px;
    height: 32px;

    &:hover {
      background: ${({ theme }) => theme.colors.borderGray2};
    }

    svg {
      transform: translate(2px, 2px);
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const DescText = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.fontGray2};
  line-height: 21px;
  margin-top: 15px;
`;

const RidiCashAmount = styled.p`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mySecondaryTitle};
  margin-top: 40px;
`;

const AmountWon = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blue};
  padding-left: 3px;
`;

const AmountNum = styled.span`
  font-size: 22px;
`;

export default MyRidiCashInfoText;

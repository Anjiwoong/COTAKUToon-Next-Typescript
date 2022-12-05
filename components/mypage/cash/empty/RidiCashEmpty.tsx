import { useRouter } from 'next/router';
import styled from 'styled-components';

import { BiCoinStack } from 'react-icons/bi';

const RidiCashEmpty = () => {
  const router = useRouter();

  return (
    <EmptyWrapper>
      <span>
        <BiCoinStack />
      </span>
      {router.pathname === '/mypage/cash/detail' && (
        <p>리디캐시 충전 내역이 없습니다.</p>
      )}
      {router.pathname === '/mypage/cash/wait' && (
        <p>입금 대기 내역이 없습니다.</p>
      )}
    </EmptyWrapper>
  );
};

const EmptyWrapper = styled.div`
  padding: 160px;
  text-align: center;
  font-weight: 400;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.fontGray7};

  span {
    ${({ theme }) => theme.mixins.autoMargin()};
  }

  svg {
    font-size: 80px;
    color: ${({ theme }) => theme.colors.bgBarGray2};
  }
`;

export default RidiCashEmpty;

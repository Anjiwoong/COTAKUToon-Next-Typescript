import styled from 'styled-components';

import { BiUndo } from 'react-icons/bi';

const MyPagePayment = () => {
  return (
    <PaymentWrap>
      <BiUndo />
      <span>결제 내역이 없습니다.</span>
    </PaymentWrap>
  );
};

const PaymentWrap = styled.div`
  ${({ theme }) => theme.mixins.paddingY('160px')};
  ${({ theme }) => theme.mixins.autoMargin()};

  svg {
    ${({ theme }) => theme.mixins.autoMargin()};
    display: block;
    font-size: 84px;
    color: ${({ theme }) => theme.colors.fontGray7};
    margin-bottom: 15px;
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.fontGray7};
  }
`;

export default MyPagePayment;

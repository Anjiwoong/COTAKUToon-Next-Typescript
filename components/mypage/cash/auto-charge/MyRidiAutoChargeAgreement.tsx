import React from 'react';
import styled from 'styled-components';
import { AgreementWrapper } from '../MyRidiCashAgreement';

const MyRidiAutoChargeAgreement = () => {
  return (
    <AgreementWrapper>
      <A11yHidden>구매 동의</A11yHidden>
      <input type="checkbox" id="payment-agreement" />
      <label htmlFor="payment-agreement">
        <span>
          상품, 가격, 할인 정보, 유의 사항 등을 확인하였으며 구매에 동의합니다.
        </span>
      </label>
    </AgreementWrapper>
  );
};

const A11yHidden = styled.h4`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

export default MyRidiAutoChargeAgreement;

import React from 'react';
import styled from 'styled-components';
import Input from '../../../UI/Input';

const MyRidiAutoChargePayment = () => {
  return (
    <PaymentWrapper>
      <h3>결제수단 선택</h3>
      <Input
        type="radio"
        name="auto__method"
        id="auto__method"
        defaultChecked
      />
      <label htmlFor="auto__method">신용카드</label>
    </PaymentWrapper>
  );
};

const PaymentWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  padding: 30px 0 20px 0;

  h3 {
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.mySecondaryTitle};
  }

  input {
    display: none;

    &:checked + label {
      color: ${({ theme }) => theme.colors.blue};
    }

    &:checked + label::before {
      content: '';
      position: absolute;
      left: -25px;
      width: 18px;
      height: 18px;
      border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primaryColor};
    }

    &:checked + label::after {
      ${({ theme }) => theme.mixins.centerTranslateY()};
      content: '';
      position: absolute;
      left: -19px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
    }
  }

  label {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
    position: relative;
    margin-left: 50px;
    font-weight: 400;
    font-size: 12px;

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      width: 18px;
      height: 18px;
      border: 1px solid ${({ theme }) => theme.colors.gray2};
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default MyRidiAutoChargePayment;

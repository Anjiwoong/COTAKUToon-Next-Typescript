import React from 'react';
import styled from 'styled-components';
import MyRidiCashAgreement from './MyRidiCashAgreement';
import MyRidiCashCaution from './MyRidiCashCaution';
import MyRidiCashChargeButton from './MyRidiCashChargeButton';
import MyRidiCashPayment from './MyRidiCashPayment';
import MyRidiCashSelect from './MyRidiCashSelect';

const MyRidiCashForm = () => {
  return (
    <RidiCashForm>
      <MyRidiCashSelect />
      <MyRidiCashPayment />
      <MyRidiCashAgreement />
      <MyRidiCashChargeButton />
      <MyRidiCashCaution />
    </RidiCashForm>
  );
};

const RidiCashForm = styled.form`
  width: 640px;
`;

export default MyRidiCashForm;

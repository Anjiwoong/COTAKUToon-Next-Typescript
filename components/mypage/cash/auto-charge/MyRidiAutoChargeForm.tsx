import styled from 'styled-components';

import MyRidiAutoChargeButton from './MyRidiAutoChargeButton';
import MyRidiAutoChargeAgreement from './MyRidiAutoChargeAgreement';
import MyRidiAutoChargeNotice from './MyRidiAutoChargeNotice';
import MyRidiAutoChargePayment from './MyRidiAutoChargePayment';
import MyRidiAutoChargeSelect from './MyRidiAutoChargeSelect';
import MyRidiAutoChargeCaution from './MyRidiAutoChargeCaution';

const MyRidiAutoChargeForm = () => {
  return (
    <AutoChargeForm>
      <h4>자동충전 금액 선택</h4>
      <MyRidiAutoChargeSelect />
      <MyRidiAutoChargePayment />
      <MyRidiAutoChargeNotice />
      <MyRidiAutoChargeAgreement />
      <MyRidiAutoChargeButton />
      <MyRidiAutoChargeCaution />
    </AutoChargeForm>
  );
};

const AutoChargeForm = styled.form`
  width: 640px;

  h4 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mySecondaryTitle};
    margin: 10px 0 18px 0;
  }
`;

export default MyRidiAutoChargeForm;

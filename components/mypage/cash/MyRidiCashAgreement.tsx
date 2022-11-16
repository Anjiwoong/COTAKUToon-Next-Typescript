import styled from 'styled-components';
import Input from '../../UI/Input';

const MyRidiCashAgreement = () => {
  return (
    <AgreementWrapper>
      <A11yHidden>구매 동의</A11yHidden>
      <Input type="checkbox" id="payment-agreement" />
      <label htmlFor="payment-agreement">
        <span>
          상품, 가격, 할인 정보, 유의 사항 등을 확인하였으며 구매에 동의합니다.
        </span>
      </label>
    </AgreementWrapper>
  );
};

export const AgreementWrapper = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) => theme.mixins.paddingY('20px')};

  position: relative;
  width: 89%;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mySecondaryTitle};

  input {
    appearance: none;
    width: 0;
    height: 0;

    &:checked + label::before {
      border-color: ${({ theme }) => theme.colors.borderBlue1};
      background: ${({ theme }) => theme.colors.blue};
    }
  }

  label {
    width: 300px;

    &::before {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.white};
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      left: 68px;
      top: 50%;
      margin-top: -9px;
      border-radius: 2px;
      border: 1px solid ${({ theme }) => theme.colors.gray2};
    }

    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      text-indent: -444px;
      font-size: 0;
      overflow: hidden;
      background: url('/images/mypage/check.svg') center center no-repeat;
      background-size: 100% 100%;
      width: 10px;
      height: 10px;
      left: 72px;
      top: 50%;
      margin-top: -5px;
    }
  }
`;

const A11yHidden = styled.h4`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

export default MyRidiCashAgreement;

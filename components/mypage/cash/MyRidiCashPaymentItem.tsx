import Image from 'next/image';
import styled, { css } from 'styled-components';
import Input from '../../UI/Input';
import { paymentProps } from './ridi-cash-props';

const MyRidiCashPaymentItem = (props: paymentProps) => {
  return (
    <PaymentList center={props.id === 'item3'}>
      <Input type="radio" name="pay-type" id={props.id} radio />
      <label htmlFor={props.id}>
        {props.image !== '' && (
          <PayImage
            src={props.image}
            alt="pay"
            width={100}
            height={16}
            left={props.id === 'item2' ? 1 : 0}
          />
        )}
        {props.content !== '' && <span>{props.content}</span>}
      </label>
    </PaymentList>
  );
};

const PaymentList = styled.li`
  ${({ theme }) => theme.mixins.flexBox()};
  position: relative;
  width: 140px;
  height: 20px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.fontGray7};
  font-size: 13px;
  font-weight: 700;

  ${(props: { center: boolean }) =>
    props.center &&
    css`
      ${({ theme }) =>
        theme.mixins.flexBox('row', 'space-around', 'stretch', 'nowrap')};
    `}

  input {
    &:checked + label,
    &:checked + label em {
      background: ${({ theme }) => theme.colors.white};
    }

    &:checked + label::before {
      left: 0;
    }

    &:checked + label::after {
      transform: translateY(-65%);
      top: 45%;
      left: 6px;
    }
  }

  label {
    padding-left: 10px;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      width: 18px;
      height: 18px;
      border: 1px solid ${({ theme }) => theme.colors.gray2};
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
      transform: translateY(-1px);
    }

    span {
      display: block;
      text-indent: 15px;
    }
  }
`;

const PayImage = styled(Image)`
  ${(props: { left: boolean | number }) =>
    props.left &&
    css`
      transform: translateX(-10px);
    `}
`;

export default MyRidiCashPaymentItem;

import styled from 'styled-components';
import Input from '../../UI/Input';
import { SelectTypes } from '../../../types/mypage/ridi-cash-types';

const MyRidiCashSelectItem = (props: SelectTypes) => {
  return (
    <>
      <SelectList>
        <Input
          type="radio"
          name="base"
          id={props.id}
          defaultChecked={props.id === 'list1'}
          radio
        />
        <SelectLabel htmlFor={props.id}>
          <span>{props.price.toLocaleString()}원</span>
          <span>{props.savingRate}%</span>
          <span>
            <em>+</em> {props.savingPoint.toLocaleString()} <em>원</em>
          </span>
        </SelectLabel>
      </SelectList>
      {(props.id === 'list3' || props.id === 'list6') && <hr />}
    </>
  );
};

export const SelectList = styled.li`
  text-align: right;
  font-size: 15px;
  font-weight: 600;
  margin-top: 2px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const SelectLabel = styled.label`
  ${({ theme }) => theme.mixins.paddingY('10px')};
  ${({ theme }) => theme.mixins.flexBox()};
  position: relative;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.borderGray2};
    border-radius: 25px;
    transition: all 0.25s ease;
  }

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    width: 18px;
    height: 18px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
  }

  em {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.fontGray2};
  }

  span {
    &:nth-of-type(1) {
      width: 210px;
    }

    &:nth-of-type(2) {
      width: 165px;
    }

    &:nth-of-type(3) {
      width: 247px;
      margin-right: 15px;
    }
  }
`;

export default MyRidiCashSelectItem;

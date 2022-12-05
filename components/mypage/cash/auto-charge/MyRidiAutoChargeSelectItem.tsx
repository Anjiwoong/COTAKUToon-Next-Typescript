import styled from 'styled-components';
import Input from '../../../UI/Input';

import { SelectTypes } from '../../../../types/mypage/ridi-cash-types';

import { SelectLabel, SelectList } from '../MyRidiCashSelectItem';
import { BiRightArrowAlt } from 'react-icons/bi';

const MyRidiAutoChargeSelectItem = (props: SelectTypes) => {
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
        <AutoChargeLabel htmlFor={props.id}>
          <span>{props.price.toLocaleString()}원</span>
          <span>
            <span>{props.savingRate}%</span>
            <span>
              <BiRightArrowAlt />
            </span>
            <span>{props.savingRate * 2}%</span>
          </span>
          <span>
            <em>+</em> {props.savingPoint} <em>원</em>
          </span>
        </AutoChargeLabel>
      </SelectList>
      {(props.id === 'list4' || props.id === 'list7') && <hr />}
    </>
  );
};

const AutoChargeLabel = styled(SelectLabel)`
  height: 37.78px;

  span {
    &:nth-of-type(2) {
      span {
        position: relative;
        left: 30px;

        &:nth-child(1) {
          color: ${({ theme }) => theme.colors.gray2};
          text-decoration: line-through;
        }

        &:nth-child(2) {
          color: ${({ theme }) => theme.colors.gray2};
          position: relative;
          top: 2px;
        }
      }

      svg {
        margin-right: 2px;
      }
    }
  }
`;

export default MyRidiAutoChargeSelectItem;

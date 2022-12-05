import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TosItemTypes } from '../../types/signup/signup-types';

import Input from '../UI/Input';

const SignupTosItem = (props: TosItemTypes) => {
  const [isChecked, setIsChecked] = useState(false);
  const { allCheck, essential, essentialCheckHandler } = props;

  const checkHandler = () => {
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
    if (allCheck) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [allCheck]);

  useEffect(() => {
    if (essential) {
      essentialCheckHandler(isChecked, props.id);
    }
  }, [isChecked]);

  return (
    <TosItem>
      <Input
        type="checkbox"
        name="tosCheck"
        id={props.id}
        onChange={checkHandler}
        checked={isChecked}
      />
      <label htmlFor={props.id}>
        <span></span>
        <span>{props.title}</span>
      </label>
      {props.option !== '' && <Link href="/error">{props.option}</Link>}
    </TosItem>
  );
};

const TosItem = styled.li`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.marginY('15px')};

  a {
    position: relative;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.borderGray4};
    margin-right: 10px;

    &::after {
      content: '';
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 6px;
      height: 6px;
      border-style: solid;
      border-width: 1px 1px 0 0;
      border-color: ${({ theme }) => theme.colors.borderGray4};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.fontGray2};

      &::after {
        border-color: ${({ theme }) => theme.colors.fontGray2};
      }
    }
  }
`;

export default SignupTosItem;

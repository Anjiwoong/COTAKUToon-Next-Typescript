import { forwardRef, LegacyRef } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  type: string;
  id?: string;
  name?: string;
  placeholder?: string;
  autocomplete?: string;
  login?: boolean;
  password?: boolean;
}

interface StyleProps {
  login?: boolean;
  password?: boolean;
}

const Input = forwardRef(
  (props: InputProps, ref?: LegacyRef<HTMLInputElement>) => {
    return <InputWrap {...props} ref={ref} />;
  }
);

const InputWrap = styled.input`
  ${(props: StyleProps) =>
    props.login &&
    css`
      ${({ theme }) => theme.mixins.paddingX('14px')}
      ${({ theme }) => theme.mixins.paddingY('18px')}
      
      width: 340px;
      height: 48px;
      border: 1px solid ${({ theme }) => theme.colors.borderGray3};
      font-size: 14px;
      border-radius: 4px 4px 0 0;

      &::placeholder {
        color: ${({ theme }) => theme.colors.fontGray2};
      }

      &:hover {
        box-shadow: inset 0 0 1px 0.5px
          ${({ theme }) => theme.colors.borderGray4};
      }
    `}

  ${(props: StyleProps) =>
    props.password &&
    css`
      border-radius: 0;
      border-top: 0;
    `}
`;

export default Input;

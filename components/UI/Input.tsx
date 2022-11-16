import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { InputProps } from './input-props';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <InputWrap {...props} ref={ref} />;
});

const InputWrap = styled.input`
  ${(props: InputProps) =>
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

  ${(props: InputProps) =>
    props.password &&
    css`
      border-radius: 0;
      border-top: 0;
    `}

    ${(props: InputProps) =>
    props.box &&
    css`
      width: 100%;
      height: 100%;
      border: 1px solid ${({ theme }) => theme.colors.gray1};
      border-radius: 4px;
      text-indent: 10px;

      &:hover {
        box-shadow: inset 0 0 1px 1px ${({ theme }) => theme.colors.fontSkyBlue};
      }

      &[name='birth'] {
        background-size: 12%;
        background-position: 96% center;
      }
    `}

    ${props =>
    props.radio &&
    css`
      display: none;

      &:checked + label,
      &:checked + label em {
        background: ${({ theme }) => theme.colors.bgLightBlue};
        border-radius: 25px;
        color: ${({ theme }) => theme.colors.blue};

        span {
          span {
            &:nth-child(-n + 2) {
              color: ${({ theme }) => theme.colors.lightBlue};
            }
          }
        }
      }

      &:checked + label::before {
        content: '';
        position: absolute;
        left: 15px;
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
        left: 21px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export default Input;

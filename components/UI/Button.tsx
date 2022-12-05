import styled, { css } from 'styled-components';

import { ButtonTypes } from '../../types/UI/button-types';

const Button = (props: ButtonTypes) => {
  return <ButtonWrap {...props}>{props.children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  ${({ theme }) => theme.mixins.removeBtnStyle()}

  ${(props: ButtonTypes) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${(props: ButtonTypes) =>
    props.login &&
    css`
      ${({ theme }) => theme.mixins.paddingY('16px')}

      width: 100%;
      height: 50px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      font-size: 15px;
      font-weight: 600;
      box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);
      border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
    `}

  ${(props: ButtonTypes) =>
    props.signup &&
    css`
      ${({ theme }) => theme.mixins.paddingY('16px')}

      width: 100%;
      color: ${({ theme }) => theme.colors.fontGray2};
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0 2px 4px 0 rgb(209 213 217 / 30%);
      border: 1px solid ${({ theme }) => theme.colors.gray2};
      height: 50px;
      border-radius: 4px;
      font-size: 15px;
      font-weight: 600;
    `}

    ${(props: ButtonTypes) =>
    props.gender &&
    css`
      width: 50%;
      height: 100%;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 4px 0 0 4px;
      color: ${({ theme }) => theme.colors.fontGray1};
      font-size: 14px;
      border: 1px solid ${({ theme }) => theme.colors.gray1};

      &:hover {
        box-shadow: inset 0 0 1px 0.5px
          ${({ theme }) => theme.colors.fontSkyBlue};
      }

      &:nth-child(2) {
        border-radius: 0 4px 4px 0;
        /* border-left: 0; */
      }
    `}

    ${(props: ButtonTypes) =>
    props.submit &&
    css`
      width: 100%;
      height: 50px;
      background: ${({ theme }) => theme.colors.blue};
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
      border-radius: 4px;
      box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
      margin-top: 15px;

      &:disabled {
        background: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.gray1};
        border: 1px solid ${({ theme }) => theme.colors.gray2};
      }
    `}

    ${(props: ButtonTypes) =>
    props.prev &&
    css`
      ${({ theme }) => theme.mixins.flexCenter()};
      ${({ theme }) => theme.mixins.centerTranslateY()};
      position: absolute;
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.borderGray2};
      border-radius: 50%;
      font-size: 26px;
      color: ${({ theme }) => theme.colors.fontGray1};

      left: -20px;
      z-index: 1000;
    `}

    ${(props: ButtonTypes) =>
    props.next &&
    css`
      ${({ theme }) => theme.mixins.flexCenter()};
      ${({ theme }) => theme.mixins.centerTranslateY()};
      position: absolute;
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.white};
      border: 2px solid ${({ theme }) => theme.colors.borderGray2};
      border-radius: 50%;
      font-size: 26px;
      color: ${({ theme }) => theme.colors.fontGray1};

      right: -20px;
      z-index: 1000;
    `}
`;

export default Button;

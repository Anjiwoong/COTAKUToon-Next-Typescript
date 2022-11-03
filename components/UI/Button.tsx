import styled, { css } from 'styled-components';

interface ButtonProps {
  children: string;
  login?: boolean;
  signup?: boolean;
}

interface StyleProps {
  login?: boolean;
  signup?: boolean;
}

const Button = (props: ButtonProps) => {
  return <ButtonWrap {...props}>{props.children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  ${(props: StyleProps) =>
    props.login &&
    css`
      ${({ theme }) => theme.mixins.removeBtnStyle()}
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

  ${(props: StyleProps) =>
    props.signup &&
    css`
      ${({ theme }) => theme.mixins.removeBtnStyle()}
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
`;

export default Button;

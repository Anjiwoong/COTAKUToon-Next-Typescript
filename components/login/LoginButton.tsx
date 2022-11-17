import styled, { css } from 'styled-components';
import Button from '../UI/Button';
import { loadingProps } from '../../types/login-props';

const LoginButton = (props: loadingProps) => {
  return (
    <>
      <ErrorMessage></ErrorMessage>
      <LoginButtonWrap login $loading={props.loading}>
        {props.loading ? '로그인 하는 중...' : '로그인'}
      </LoginButtonWrap>
    </>
  );
};

const ErrorMessage = styled.span`
  display: block;
  width: 100%;
  margin: 4px 0;
  padding-left: 4px;
  height: 20px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 11px;
  font-weight: 700;
`;

const LoginButtonWrap = styled(Button)`
  ${(props: loadingProps) =>
    props.$loading &&
    css`
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.gray2};
      border: none;
    `}
`;

export default LoginButton;

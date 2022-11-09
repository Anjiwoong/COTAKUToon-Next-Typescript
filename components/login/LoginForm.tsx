import styled from 'styled-components';
import LoginButton from './LoginButton';
import LoginInfo from './LoginInfo';
import LoginInput from './LoginInput';

const LoginForm = () => {
  return (
    <LoginFormWrap>
      <fieldset>
        <LoginInput />
        <LoginInfo />
        <LoginButton />
      </fieldset>
    </LoginFormWrap>
  );
};

const LoginFormWrap = styled.form`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) => theme.mixins.paddingX('10px')};
  ${({ theme }) => theme.mixins.paddingY('10px')};

  width: 360px;
  margin-top: 80px;
`;

export default LoginForm;

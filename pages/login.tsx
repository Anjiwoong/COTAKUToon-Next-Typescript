import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginHeader from '../components/header/LoginHeader';
import SignupButton from '../components/login/SignupButton';

const LoginPage = () => {
  return (
    <Login>
      <LoginHeader />
      <LoginForm />
      <SignupButton />
    </Login>
  );
};

const Login = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgBlue};
  letter-spacing: -0.4px;
`;

export default LoginPage;

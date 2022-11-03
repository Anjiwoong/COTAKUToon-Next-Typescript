import styled from 'styled-components';
import LoginHeader from '../components/Layout/LoginHeader';
import SignupForm from '../components/signup/SignupForm';

const SignupPage = () => {
  return (
    <SignupWrap>
      <LoginHeader />
      <SignupForm />
    </SignupWrap>
  );
};

const SignupWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgBlue};
  letter-spacing: -0.4px;
`;

export default SignupPage;

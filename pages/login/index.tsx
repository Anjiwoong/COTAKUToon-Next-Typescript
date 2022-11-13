import styled from 'styled-components';
import LoginForm from '../../components/login/LoginForm';
import LoginHeader from '../../components/header/LoginHeader';
import SignupButton from '../../components/login/SignupButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then(async session => {
      if (session) await router.replace('/');
      else setIsLoading(false);
    });
  }, [router]);

  if (isLoading) return <p>Loading...</p>;

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

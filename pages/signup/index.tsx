import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoginHeader from '../../components/header/LoginHeader';
import SignupForm from '../../components/signup/SignupForm';

const SignupPage = () => {
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

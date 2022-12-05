import styled from 'styled-components';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import LoginForm from '../../components/login/LoginForm';
import LoginHeader from '../../components/Layout/header/LoginHeader';
import SignupButton from '../../components/login/SignupButton';

const LoginPage = () => {
  return (
    <Login>
      <LoginHeader />
      <LoginForm />
      <SignupButton />
    </Login>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

const Login = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgBlue};
  letter-spacing: -0.4px;
`;

export default LoginPage;

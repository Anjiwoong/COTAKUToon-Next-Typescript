import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import styled from 'styled-components';

import LoginHeader from '../../components/Layout/header/LoginHeader';
import SignupForm from '../../components/signup/SignupForm';

const SignupPage = () => {
  return (
    <SignupWrap>
      <LoginHeader />
      <SignupForm />
    </SignupWrap>
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

const SignupWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgBlue};
  letter-spacing: -0.4px;
`;

export default SignupPage;

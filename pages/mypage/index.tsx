import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Footer from '../../components/Layout/footer/Footer';
import Header from '../../components/Layout/header/Header';
import MyPageContainer from '../../components/Layout/MyPageContainer';
import MyPageHome from '../../components/mypage/home/MyPageHome';

const Mypage = () => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPageHome />
      </MyPageContainer>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession({ req: context.req });

  if (!session) {
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

export default Mypage;

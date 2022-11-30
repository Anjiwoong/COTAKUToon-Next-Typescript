import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import { DataTypes } from '../../types/webtoon-types';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MyPageContainer from '../../components/Layout/MyPageContainer';
import MyPageHome from '../../components/mypage/home/MyPageHome';
import { fetchRecentWebtoon } from '../../lib/fetch-recent-webtoon';

const Mypage = ({ recent }: { recent?: DataTypes[] }) => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPageHome recent={recent} />
      </MyPageContainer>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession({ req: context.req });
  const res = (await fetchRecentWebtoon(session?.user?.name)) || null;

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session, recent: res },
  };
};

export default Mypage;

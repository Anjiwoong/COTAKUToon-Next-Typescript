import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import { RecentTypes } from '../../../types/mypage/recent-webtoon-types';
import { DbUserTypes } from '../../../types/lib/db-user-types';

import Footer from '../../../components/Layout/footer/Footer';
import Header from '../../../components/Layout/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyPageRecent from '../../../components/mypage/recent/MyPageRecent';

const RecentViewPage = ({ id, recent }: RecentTypes) => {
  return (
    <>
      <Header sub />
      <MyPageContainer>
        <MyPageRecent recent={recent} id={id} />
      </MyPageContainer>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession({ req: context.req });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/recent-webtoon`
  );

  const data = await response.json();

  const loginUser = data.data.find(
    (item: DbUserTypes) => item.id === session?.user?.name
  );

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { id: session.user?.name, recent: loginUser.recentWebtoon || null },
  };
};

export default RecentViewPage;

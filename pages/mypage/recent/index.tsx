import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import { RecentTypes } from '../../../types/recent-webtoon-types';

import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyPageRecent from '../../../components/mypage/recent/MyPageRecent';
import { fetchRecentWebtoon } from '../../../lib/fetch-recent-webtoon';

const RecentViewPage = ({ recent, id }: RecentTypes) => {
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
    props: { id: session.user?.name, recent: res },
  };
};

export default RecentViewPage;

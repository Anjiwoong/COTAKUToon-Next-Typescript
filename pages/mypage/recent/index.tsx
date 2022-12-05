import { NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';

import { RecentTypes } from '../../../types/mypage/recent-webtoon-types';

import Footer from '../../../components/Layout/footer/Footer';
import Header from '../../../components/Layout/header/Header';
import MyPageContainer from '../../../components/Layout/MyPageContainer';
import MyPageRecent from '../../../components/mypage/recent/MyPageRecent';
import useSWR from 'swr';
import { DbUserTypes } from '../../../types/lib/db-user-types';

const RecentViewPage = ({ id }: RecentTypes) => {
  const { data: session } = useSession();

  const { data: recent } = useSWR('/api/recent-webtoon', url =>
    fetch(url).then(async res => {
      const data = await res.json();

      const loginUser = data.data.find(
        (item: DbUserTypes) => item.id === session?.user?.name
      );
      return loginUser.recentWebtoon;
    })
  );

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

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { id: session.user?.name },
  };
};

export default RecentViewPage;

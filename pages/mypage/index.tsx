import { NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import useSWR from 'swr';

import { DbUserTypes } from '../../types/lib/db-user-types';

import Footer from '../../components/Layout/footer/Footer';
import Header from '../../components/Layout/header/Header';
import MyPageContainer from '../../components/Layout/MyPageContainer';
import MyPageHome from '../../components/mypage/home/MyPageHome';

const Mypage = () => {
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
        <MyPageHome recent={recent} />
      </MyPageContainer>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession();
  console.log(session);

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

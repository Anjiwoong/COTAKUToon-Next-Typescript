import { InferGetStaticPropsType } from 'next';

import { getWebtoon } from '../lib/api-util';

import Footer from '../components/Layout/footer/Footer';
import Header from '../components/Layout/header/Header';
import HomeContainer from '../components/home/HomeContainer';
import { useSession } from 'next-auth/react';

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useSession();
  // console.log(data);
  return (
    <>
      <Header webtoon={props.webtoon} />
      <HomeContainer webtoon={props.webtoon} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getWebtoon();

  if (!data)
    return {
      redirect: {
        destination: '/no-data',
      },
    };

  if (!data.length) return { notFound: true };

  return {
    props: {
      webtoon: data,
    },
  };
};

export default HomePage;

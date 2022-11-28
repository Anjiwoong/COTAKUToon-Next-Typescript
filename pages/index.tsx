import { InferGetStaticPropsType } from 'next';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomeContainer from '../components/home/HomeContainer';
import { getWebtoon } from '../lib/api-util';

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
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

import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import { getWebtoon, getWebtoonById } from '../../lib/api-util';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import WebtoonContainer from '../../components/webtoon/WebtoonContainer';

const WebtoonDetailPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <>
      <Header sub />
      <WebtoonContainer
        selectedWebtoon={props.selectedWebtoon}
        webtoon={props.webtoon}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const webtoonId = params?.webtoonId?.toString();
  const webtoon = await getWebtoon();

  const selectedWebtoon = await getWebtoonById(webtoonId);

  return {
    props: {
      webtoon: webtoon,
      selectedWebtoon: selectedWebtoon,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getWebtoon();

  const paths = data.map(webtoon => ({
    params: { webtoonId: webtoon.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default WebtoonDetailPage;

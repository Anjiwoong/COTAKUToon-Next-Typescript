import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { getWebtoon, getWebtoonById } from '../../../lib/api-util';
import { viewerSettingState } from '../../../states/viewerSettingState';
import { viewerNavigationState } from '../../../states/viewerNavigationState';

import ViewerFooterNav from '../../../components/viewer/ViewerFooterNav';
import ViewerHeader from '../../../components/viewer/ViewerHeader';
import ViewerImage from '../../../components/viewer/ViewerImage';

const WebtoonViewerPage = ({
  selectedWebtoon,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isVisible, setIsVisible] = useRecoilState(viewerNavigationState);
  const isVisibleSetting = useRecoilValue(viewerSettingState);

  useScrollPosition(
    ({ currPos }) => {
      const scrollY = Math.abs(currPos.y);

      if (!isVisibleSetting) {
        if (scrollY >= 55) setIsVisible(false);
        else setIsVisible(true);
      }
    },
    [isVisible, isVisibleSetting],
    undefined,
    false,
    100
  );

  return (
    <ViewerWrapper>
      <ViewerHeader title={selectedWebtoon.title} />
      <ViewerImage cover={selectedWebtoon.cover} />
      <ViewerFooterNav title={selectedWebtoon.title} />
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray7};
`;

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const webtoonId = params?.webtoonId?.toString();

  const selectedWebtoon = await getWebtoonById(webtoonId);

  return {
    props: {
      selectedWebtoon: selectedWebtoon,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getWebtoon();
  const viewList = [...Array(15)].map((_, i) => i + 1);
  const paths: { params: { webtoonId?: string; webtoonView: string } }[] = [];

  data.map(data =>
    viewList.map(series =>
      paths.push({
        params: { webtoonId: data.id, webtoonView: `ep${series.toString()}` },
      })
    )
  );

  return {
    paths: paths,
    fallback: false,
  };
};

export default WebtoonViewerPage;

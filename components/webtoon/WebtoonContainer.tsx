import styled from 'styled-components';

import { WebtoonContainerTypes } from '../../types/webtoon-types';

import WebtoonInfo from './webtoonInfo/WebtoonInfo';
import WebtoonIntroduce from './webtoonIntroduce/WebtoonIntroduce';
import WebtoonKeyword from './webtoonKeyword/WebtoonKeyword';
import WebtoonReview from './webtoonReview/WebtoonReview';
import WebtoonSeries from './webtoonSeries/WebtoonSeries';
import WebtoonSimilar from './webtoonSimilar/WebtoonSimilar';

const WebtoonContainer = ({
  selectedWebtoon,
  webtoon,
}: WebtoonContainerTypes) => {
  return (
    <Wrapper>
      <A11yHidden>상세페이지</A11yHidden>
      <WebtoonInfo webtoon={selectedWebtoon} />
      <WebtoonSeries
        cover={selectedWebtoon.cover}
        title={selectedWebtoon.title}
      />
      <WebtoonKeyword />
      <WebtoonIntroduce />
      <WebtoonReview />
      <WebtoonSimilar webtoon={webtoon} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 1170px;
  min-width: 793px;
  padding-bottom: 100px;
`;

const A11yHidden = styled.h2`
  ${({ theme }) => theme.mixins.a11yHidden()};
`;

export default WebtoonContainer;

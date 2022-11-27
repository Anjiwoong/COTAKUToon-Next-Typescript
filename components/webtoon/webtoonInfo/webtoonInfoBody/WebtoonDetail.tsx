import styled from 'styled-components';

import { DataTypes } from '../../../../types/webtoon-types';

import BenefitsPeriod from './BenefitsPeriod';
import FirstEpisodeButton from './FirstEpisodeButton';
import WebtoonMetadata from './WebtoonMetadata';
import WebtoonNotice from './WebtoonNotice';
import WebtoonStarRate from './WebtoonStarRate';

const WebtoonDetail = ({ webtoon }: { webtoon: DataTypes }) => {
  return (
    <Wrapper>
      <h3>{webtoon?.title}</h3>
      <WebtoonStarRate rating={webtoon.rating} views={webtoon.views} />
      <WebtoonMetadata author={webtoon.author} />
      <WebtoonNotice />
      <BenefitsPeriod />
      <FirstEpisodeButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;

  h3 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 700;
  }
`;

export default WebtoonDetail;

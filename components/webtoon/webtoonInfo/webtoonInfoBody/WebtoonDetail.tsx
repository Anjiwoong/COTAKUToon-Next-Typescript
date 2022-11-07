import styled from 'styled-components';
import BenefitsPeriod from './BenefitsPeriod';
import FirstEpisodeButton from './FirstEpisodeButton';
import WebtoonMetadata from './WebtoonMetadata';
import WebtoonNotice from './WebtoonNotice';
import WebtoonStarRate from './WebtoonStarRate';

const WebtoonDetail = () => {
  return (
    <Wrapper>
      <h3>마귀</h3>
      <WebtoonStarRate />
      <WebtoonMetadata />
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

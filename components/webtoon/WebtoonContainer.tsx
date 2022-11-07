import styled from 'styled-components';
import WebtoonInfo from './webtoonInfo/WebtoonInfo';
import WebtoonSeries from './webtoonSeries/WebtoonSeries';

const WebtoonContainer = () => {
  return (
    <Wrapper>
      <A11yHidden>상세페이지</A11yHidden>
      <WebtoonInfo />
      <WebtoonSeries />
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

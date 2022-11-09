import styled from 'styled-components';
import EvaluateForm from './EvaluateForm';
import EvaluateRate from './EvaluateRate';

const EvaluateWebtoon = () => {
  return (
    <Wrapper>
      <EvaluateRate />
      <EvaluateForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  margin-top: 14px;
`;

export default EvaluateWebtoon;

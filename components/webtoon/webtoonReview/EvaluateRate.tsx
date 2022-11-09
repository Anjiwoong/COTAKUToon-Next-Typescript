import styled from 'styled-components';

const EvaluateRate = () => {
  return (
    <StarRate>
      <EvaluateBook>이 책을 평가해주세요!</EvaluateBook>
      <StarWrapper>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StarWrapper>
    </StarRate>
  );
};

const StarRate = styled.div`
  position: relative;
  padding-bottom: 18px;
`;

const EvaluateBook = styled.span`
  display: block;
  height: 42px;
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: 700;
  padding-top: 10px;
  letter-spacing: -0.03em;
`;

const StarWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter()};
  margin-top: 5px;

  span {
    display: inline-block;
    width: 50px;
    height: 48px;
    background: url('/images/books/star.png') no-repeat;
    background-position: 50% 0%;
    background-size: 45px 90px;
    cursor: pointer;

    &:hover {
      background-position: 0% 110%;
    }

    /* &selected {
      background-position: 0% 110%;
      animation-duration: 0.7s;
      animation-timing-function: ease;
    } */
  }
`;

export default EvaluateRate;

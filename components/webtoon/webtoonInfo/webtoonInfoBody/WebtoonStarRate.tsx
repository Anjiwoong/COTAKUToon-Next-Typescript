import styled from 'styled-components';

const WebtoonStarRate = () => {
  return (
    <Wrapper>
      <StartBg>
        <span></span>
      </StartBg>
      <span>4.7점</span>
      <span>(30,334명)</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.marginY('20px')};

  span {
    :nth-child(2) {
      color: ${({ theme }) => theme.colors.accentFont};
      font-size: 14px;
      margin-right: 2px;
      font-weight: 600;
    }

    :last-child {
      font-size: 12px;
      font-weight: 100;
    }
  }
`;

const StartBg = styled.span`
  position: relative;
  width: 75px;
  height: 15px;
  display: inline-block;
  background: url('/images/books/emptyStar.svg') center center no-repeat;
  background-size: 100% 100%;
  margin-right: 4px;

  span {
    position: relative;
    display: block;
    overflow: hidden;
    width: 20%;
    height: 15px;

    &::after {
      content: '';
      position: absolute;
      display: block;
      background: url('/images/books/stars.svg') center center no-repeat;
      background-size: 100% 100%;
      left: 0;
      top: 0;
      width: 75px;
      height: 15px;
    }
  }
`;

export default WebtoonStarRate;

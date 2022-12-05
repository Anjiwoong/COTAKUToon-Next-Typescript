import styled from 'styled-components';

import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';

const BookIntroduce = () => {
  return (
    <Introduce>
      <ArticleMiddleTitle>작품 소개</ArticleMiddleTitle>
      <Description>
        *작품 키워드: 판타지물, 서양풍, 초월적존재, 금단의관계, 운명적사랑,
        다정남, <br /> 상처남, 짝사랑남, 집착남, 순진녀, 상처녀, 후회녀,
        추리/미스터리/스릴러, 신파 <br />
        <br /> 웹소설 『마귀』의 아름다운 판타지 스릴러 웹툰으로 재탄생! <br />
        <br />
        탑에 갇힌 공녀에게 혼담이 들어온다.
        <br /> 그녀의 남편 될 사람은 전처를 몇이나 죽였다는 잔악한 노인.
        <br /> 단단히 겁에 질린 공녀는 결국, 지하실의 석관을 깨어 마귀를
        불러내는데…
        <br />
        <br />
        <strong>“마귀여, 나는 그자와 결혼하고 싶지 않아.”</strong>
      </Description>
    </Introduce>
  );
};

const Introduce = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 50px 29px 0;
`;

const Description = styled.pre`
  margin-top: 15px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export default BookIntroduce;

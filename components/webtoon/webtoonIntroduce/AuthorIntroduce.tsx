import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import ArticleMiddleTitle from '../../Layout/ArticleMiddleTitle';

const AuthorIntroduce = () => {
  return (
    <Introduce>
      <ArticleMiddleTitle>저자 소개</ArticleMiddleTitle>
      <pre>
        각색
        <br />
        필명 : 한흔
        <br />
        참여작품 : 2013년 웹툰 '헤이마' 그림
        <br />
        웹툰 '뼈와살', '은수', '형을땡땡하다' 그림
        <br />
        단편 '밤의 동행' 글/그림
      </pre>
      <Representative>
        <h4>대표 저서</h4>
        <RepresentativeList>
          <li>
            <Link href="/webtoon">
              <Image
                src="/images/cover/bookcover12.webp"
                alt="대표웹툰"
                width={90}
                height={130}
              />
            </Link>
          </li>
        </RepresentativeList>
      </Representative>
    </Introduce>
  );
};

const Introduce = styled.article`
  ${({ theme }) => theme.mixins.autoMargin()};
  max-width: 793px;
  padding: 50px 29px 0;

  pre {
    margin-top: 15px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.8;
  }
`;

const Representative = styled.div`
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray1};

  h4 {
    margin-top: 20px;
    padding-left: 16px;
    vertical-align: top;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const RepresentativeList = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
  margin-top: 20px;

  li {
    display: block;
    margin: 15px 15px;
  }

  img {
    width: 90px;
    height: 130px;
    border-radius: 3px;
  }
`;

export default AuthorIntroduce;

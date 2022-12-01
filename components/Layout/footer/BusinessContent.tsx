import styled from 'styled-components';

const BusinessContent = () => {
  return (
    <Wrapper>
      <dl>
        <Item>
          <dt>대표자</dt>
          <dd>안지웅</dd>
        </Item>
        <Item>
          <dt>사업자 등록번호</dt>
          <dd>120-87-27435</dd>
        </Item>
        <Item>
          <dt>통신판매업 신고번호</dt>
          <dd>제 2009-서울강남 35-02139호</dd>
        </Item>
        <Item>
          <dt>이메일</dt>
          <dd>dkswldnd10@gmail.com</dd>
        </Item>
        <Item>
          <dt>대표전화</dt>
          <dd>1644-1234</dd>
        </Item>
        <Item>
          <dt>주소</dt>
          <dd>서울시 강남구 역삼동 1002-28 어반벤치빌딩 100층(테헤란로 777)</dd>
        </Item>
      </dl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 3px;

  dl {
    margin: 10px 0 -3px -13px;
  }
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  line-height: 22px;

  &::before {
    content: '';
    display: inline-block;
    background: ${({ theme }) => theme.colors.borderGray1};
    width: 1px;
    height: 9px;
    margin: 2px 6px;
  }

  ${({ theme }) => theme.media.mobile`
    font-size: 10px;
    line-height: 18px;
  `}

  dt {
    margin-right: 6px;
  }
`;

export default BusinessContent;

import Link from 'next/link';
import styled from 'styled-components';
import { MdDoubleArrow } from 'react-icons/md';

const MyPageHomeRecentHeader = () => {
  return (
    <Wrapper>
      <h3>최근 조회한 작품</h3>
      <MoreBtnWrapper>
        <Link href="/recent">
          <span>전체 보기</span>
          <MdDoubleArrow />
        </Link>
      </MoreBtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.borderHrGray2};
    left: 0;
    top: 50%;
    margin-top: -3px;
    z-index: 1;
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    clear: both;
  }

  h3 {
    position: relative;
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    float: left;
    background: ${({ theme }) => theme.colors.white};
    padding: 5px 14px 6px 0;
    margin: 0;
    z-index: 2;
  }
`;

const MoreBtnWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  float: right;
  background: ${({ theme }) => theme.colors.white};
  padding-left: 14px;
  z-index: 2;

  a {
    position: relative;
    display: inline-block;
    width: 80px;
    font-weight: 700;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 7px 15px 7px 7px;
    background: ${({ theme }) => theme.colors.btnBlack};
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.btnBlack};
  }

  svg {
    position: absolute;
    display: inline-block;
    font-size: 12px;
    top: calc(50% - 6px);
    right: 4px;
  }
`;

export default MyPageHomeRecentHeader;

import Link from 'next/link';
import styled from 'styled-components';

const BusinessInfo = () => {
  return (
    <>
      <List>
        <li>
          <Link href="#">이용약관</Link>
        </li>
        <li>
          <Link href="#">개인정보 처리방침</Link>
        </li>
        <li>
          <Link href="#">청소년보호정책</Link>
        </li>
        <li>
          <Link href="#">사업자정보확인</Link>
        </li>
      </List>
      <Copyright>
        <span>©</span>RIDI Corp.
      </Copyright>
    </>
  );
};

const List = styled.ul`
  ${({ theme }) => theme.mixins.flexBox('row', 'flex-start', 'center', 'wrap')};

  ${({ theme }) => theme.media.mobile`
    margin-top: 10px;
  `}

  li {
    color: ${({ theme }) => theme.colors.fontGray1};
    font-size: 11px;
    line-height: 19px;
    letter-spacing: -0.01em;
    display: inline-flex;
    height: 13px;
    line-height: 13px;
    letter-spacing: -0.03px;

    &:nth-child(1) {
      &::before {
        content: '';
        display: none;
      }
    }

    &:nth-of-type(2) {
      font-weight: 700;
    }

    &::before {
      content: '';
      display: inline-block;
      background: ${({ theme }) => theme.colors.gray1};
      width: 1px;
      height: 9px;
      margin: 2px 6px;
    }

    &:hover {
      opacity: 0.6;
    }

    ${({ theme }) => theme.media.mobile`
      font-size: 10px;
      line-height: 18px;
    `}
  }
`;

const Copyright = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};

  color: ${({ theme }) => theme.colors.fontGray1};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.03px;
  margin-top: 16px;

  ${({ theme }) => theme.media.mobile`
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 12px;
  `}

  span {
    font-size: 11px;
    margin-right: 4px;

    ${({ theme }) => theme.media.mobile`
      margin-right: 2px;
    `}
  }
`;

export default BusinessInfo;

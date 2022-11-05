import Link from 'next/link';
import styled from 'styled-components';
import { AiFillTrademarkCircle } from 'react-icons/ai';

const CompanyInfoList = () => {
  return (
    <List>
      <li>
        <Link href="#">회사 소개</Link>
      </li>
      <li>
        <Link href="#">
          인재채용
          <AiFillTrademarkCircle />
        </Link>
      </li>
    </List>
  );
};

const List = styled.ul`
  li {
    ${({ theme }) => theme.mixins.paddingY('6px')};
    color: ${({ theme }) => theme.colors.fontGray1};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;

    &:nth-child(1) {
      padding-top: 0;
    }

    &:hover {
      opacity: 0.6;
    }

    ${({ theme }) => theme.media.mobile`
      padding: 7px 0;
      font-size: 12px;
      line-height: 14px;
    `};

    svg {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-left: 4px;
      font-size: 14px;
      transform: translate3d(0, 2px, 0);
    }
  }
`;

export default CompanyInfoList;

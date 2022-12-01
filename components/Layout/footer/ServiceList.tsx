import Link from 'next/link';
import styled from 'styled-components';
import { notImplementedHandler } from '../../../lib/not-implemented';

const infoList = [
  '리디페이퍼',
  '제휴카드',
  '뷰어 다운로드',
  'CP사이트',
  '리디셀렉트 B2B',
];

const ServiceList = () => {
  return (
    <List>
      {infoList.map(info => (
        <li key={info}>
          <Link href="#" onClick={notImplementedHandler}>
            {info}
          </Link>
        </li>
      ))}
    </List>
  );
};

const List = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};

  li {
    color: ${({ theme }) => theme.colors.fontGray1};
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.01em;
    padding: 6px 0;

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
    `}
  }
`;

export default ServiceList;

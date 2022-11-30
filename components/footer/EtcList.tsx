import Link from 'next/link';
import styled from 'styled-components';

import { notImplementedHandler } from '../../lib/not-implemented';

const infoList = ['콘텐츠 제공 문의', '사업 제휴 문의'];

const EtcList = () => {
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
  }
`;

export default EtcList;

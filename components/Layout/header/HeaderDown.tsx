import styled, { css } from 'styled-components';

import { HeaderTypes } from '../../../types/header-types';

import HeaderDownList from './HeaderDownList';
import HeaderDownLogo from './HeaderDownLogo';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderSearchForm from './HeaderSearchForm';

const HeaderDown = ({ sub, webtoon }: HeaderTypes) => {
  return (
    <HeaderDownWrap sub={sub}>
      <nav>
        <HeaderDownLogo sub={sub} />
        <HeaderSearchForm sub={sub} webtoon={webtoon} />
        <HeaderDownList sub={sub} />
        <HeaderLoginButton sub={sub} />
      </nav>
    </HeaderDownWrap>
  );
};

const HeaderDownWrap = styled.header`
  ${({ theme }) => theme.mixins.autoMargin()}

  position: relative;
  background: ${({ theme }) => theme.colors.white};
  max-width: 1170px;
  padding: 18px 30px;

  ${({ theme }) => theme.media.mobile`
    border-radius: 16px 16px 0 0;
    padding: 10px 0;
  `}

  nav {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')}

    ${({ theme }) => theme.media.mobile`
      flex-direction: column;
    `}
  }

  ${(props: HeaderTypes) =>
    props.sub &&
    css`
      ${({ theme }) => theme.media.mobile`
        padding: 9px 0 6px 0;
        border-radius: 0;
      `}
    `}
`;

export default HeaderDown;

import styled, { css } from 'styled-components';
import { StyleProps } from './header-props';
import HeaderDownList from './HeaderDownList';

import HeaderDownLogo from './HeaderDownLogo';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderSearchForm from './HeaderSearchForm';

const HeaderDown = (props: StyleProps) => {
  return (
    <HeaderDownWrap sub={props.sub}>
      <nav>
        <HeaderDownLogo sub={props.sub} />
        <HeaderSearchForm sub={props.sub} />
        <HeaderDownList sub={props.sub} />
        <HeaderLoginButton sub={props.sub} />
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

  ${(props: StyleProps) =>
    props.sub &&
    css`
      ${({ theme }) => theme.media.mobile`
        padding: 9px 0 6px 0;
        border-radius: 0;
      `}
    `}
`;

export default HeaderDown;

import styled from 'styled-components';
import HeaderDownList from './HeaderDownList';

import HeaderDownLogo from './HeaderDownLogo';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderSearchForm from './HeaderSearchForm';

const HeaderDown = () => {
  return (
    <HeaderDownWrap>
      <nav>
        <HeaderDownLogo />
        <HeaderSearchForm />
        <HeaderDownList />
        <HeaderLoginButton />
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
`;

export default HeaderDown;

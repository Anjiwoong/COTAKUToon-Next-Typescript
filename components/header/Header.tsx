import styled, { css } from 'styled-components';
import { StyleProps } from './header-props';
import HeaderDown from './HeaderDown';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderTop />
      <HeaderDown />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  ${({ theme }) => theme.media.mobile`
    background: ${theme.colors.black}};
  `}

  ${(props: StyleProps) => props.sub && css``}
`;

export default Header;

import styled from 'styled-components';

import { HeaderTypes } from '../../../types/layout/header-types';

import HeaderDown from './HeaderDown';
import HeaderTop from './HeaderTop';

const Header = ({ sub, webtoon }: HeaderTypes) => {
  return (
    <HeaderWrap>
      <HeaderTop sub={sub} />
      <HeaderDown sub={sub} webtoon={webtoon} />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  ${({ theme }) => theme.media.mobile`
    background: ${theme.colors.black}};
  `}
`;

export default Header;

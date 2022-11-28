import styled from 'styled-components';

import { DataTypes } from '../../types/webtoon-types';

import HeaderDown from './HeaderDown';
import HeaderTop from './HeaderTop';

const Header = ({ sub, webtoon }: { sub?: boolean; webtoon: DataTypes[] }) => {
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

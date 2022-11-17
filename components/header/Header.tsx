import styled from 'styled-components';
import { StyleProps } from '../../types/header-props';
import HeaderDown from './HeaderDown';
import HeaderTop from './HeaderTop';

const Header = (props: StyleProps) => {
  return (
    <HeaderWrap>
      <HeaderTop sub={props.sub} />
      <HeaderDown sub={props.sub} />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  ${({ theme }) => theme.media.mobile`
    background: ${theme.colors.black}};
  `}
`;

export default Header;

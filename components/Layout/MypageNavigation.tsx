import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { mypageNavigationState } from '../../states/mypageNavigationState';

import NavigationItem from './mypageNavigation/NavigationItem';

const MyPageNavigation = () => {
  const menuData = useRecoilValue(mypageNavigationState);

  return (
    <Wrapper>
      <h3>마이리디</h3>
      <NavigationList>
        {menuData.map(menu => (
          <NavigationItem
            key={menu.id}
            category={menu.category}
            menu={menu.menu}
          />
        ))}
      </NavigationList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 235px;

  h3 {
    color: ${({ theme }) => theme.colors.myTitle};
    font-weight: 700;
    font-size: 24px;
  }
`;

const NavigationList = styled.ul`
  width: 130px;
  margin-top: 9px;
`;

export default MyPageNavigation;

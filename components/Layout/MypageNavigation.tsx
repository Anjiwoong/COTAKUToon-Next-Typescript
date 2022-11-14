import styled from 'styled-components';
import NavigationItem from './mypageNavigation/NavigationItem';

const menuData = [
  { id: 1, category: '마이리디 홈', menu: [{ title: '', path: '/mypage' }] },
  {
    id: 2,
    category: '책',
    menu: [{ title: '최근 조회한 작품', path: '/mypage/recent' }],
  },
  {
    id: 3,
    category: '구매/혜택',
    menu: [
      { title: '결제 내역', path: '/mypage/payment' },
      { title: '리디캐시', path: '/mypage/cash' },
    ],
  },
  {
    id: 4,
    category: '개인',
    menu: [
      { title: '1 : 1 문의', path: '/#' },
      { title: '정보 변경', path: '/#' },
    ],
  },
];

const MyPageNavigation = () => {
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

import styled from 'styled-components';

import MyRidiCashNavigationItem from './myRidiCashNavigation/MyRidiCashNavigationItem';

const navData = [
  { id: 1, title: '리디캐시 충전', path: '/mypage/cash' },
  {
    id: 2,
    title: '자동충전',
    path: '/mypage/cash/auto-charge',
  },
  {
    id: 3,
    title: '충전 내역',
    path: '/mypage/cash/detail',
  },
  {
    id: 4,
    title: '입금 대기',
    path: '/mypage/cash/wait',
  },
];

const MyRidiCashNavigation = () => {
  return (
    <>
      <RidiCashTitle>
        <span>리디캐시</span>
      </RidiCashTitle>
      <NavigationList>
        {navData.map(data => (
          <MyRidiCashNavigationItem
            key={data.id}
            title={data.title}
            path={data.path}
          />
        ))}
      </NavigationList>
    </>
  );
};

const RidiCashTitle = styled.h2`
  font-weight: 700;
  font-size: 21px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const NavigationList = styled.ul`
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
  margin-top: 20px;
`;

export default MyRidiCashNavigation;

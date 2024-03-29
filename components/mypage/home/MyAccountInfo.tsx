import { signOut, useSession } from 'next-auth/react';
import styled from 'styled-components';

import Button from '../../UI/Button';

const MyAccountInfo = () => {
  const { data: session } = useSession();
  const logoutHandler = () => signOut();

  return (
    <AccountInfoWrap>
      <InfoContainer>
        <h3>{session?.user?.name}</h3>
        <p>{session?.user?.email}</p>
      </InfoContainer>
      <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton>
    </AccountInfoWrap>
  );
};

const AccountInfoWrap = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'space-between', 'stretch', 'nowrap')};
  margin: 1px;
  flex-shrink: 0;
  max-width: 150px;
  padding: 24px 20px 20px;
  background: ${({ theme }) => theme.colors.bgBlue};
`;

const InfoContainer = styled.div`
  min-height: 85px;
  padding-bottom: 20px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
    word-break: break-all;
  }

  p {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.fontGray2};
    word-break: break-all;
    font-size: 12px;
    margin-top: 5px;
  }
`;

const LogoutButton = styled(Button)`
  ${({ theme }) => theme.mixins.paddingY('7px')};
  font-weight: 700;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.borderGray4};
  width: 64px;
  border: 2px solid ${({ theme }) => theme.colors.borderGray3};
  border-radius: 3px;

  &:hover {
    background: ${({ theme }) => theme.colors.bgBtnGray};
    border-color: ${({ theme }) => theme.colors.borderButtonGray};
  }
`;

export default MyAccountInfo;

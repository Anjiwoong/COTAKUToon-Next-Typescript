import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { HeaderTypes } from '../../../types/layout/header-types';

const HeaderLoginButton = (props: HeaderTypes) => {
  const { data: session } = useSession();

  return (
    <Login sub={props.sub}>
      <Link href={session ? '/mypage' : '/login'}>
        <span>{session ? '마이페이지' : '로그인'}</span>
      </Link>
    </Login>
  );
};

const Login = styled.div`
  display: none;

  ${({ theme }) => theme.media.mobile`
    display: block;
    position: absolute;
    font-size: 12px;
    top: 16px;
    right: 22px;
  `}

  a {
    display: block;
    width: 100%;
    padding: 6px 12px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray1};
    border-radius: 16px;
  }

  ${(props: HeaderTypes) =>
    props.sub &&
    css`
      ${({ theme }) => theme.media.mobile`
      display: none;
      `}
    `}
`;

export default HeaderLoginButton;

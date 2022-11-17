import Link from 'next/link';
import styled, { css } from 'styled-components';

import { BiBell } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { BiBookOpen } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { StyleProps } from '../../types/header-props';
import { getSession, session } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HeaderDownList = (props: StyleProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(async session => {
      if (session) setIsLoggedIn(true);
    });
  }, [session]);

  return (
    <Wrapper sub={props.sub}>
      <li>
        <Link href="/">
          <BiBell />
        </Link>
      </li>
      <li>
        <Link href="/">
          <CgShoppingCart />
        </Link>
      </li>
      <li>
        <Link href="/">
          <BiBookOpen />
        </Link>
      </li>
      <li>
        <Link href={isLoggedIn ? '/mypage' : '/login'}>
          <AiOutlineUser />
        </Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'nowrap')}
  width: 208px;

  ${({ theme }) => theme.media.mobile`
    display: none;
  `}

  li {
    ${({ theme }) => theme.mixins.flexCenter()}
    ${({ theme }) => theme.mixins.marginX('6px')}

    width: 40px;
    height: 40px;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.primaryFont};

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    ${({ theme }) => theme.mixins.flexCenter()}
  }

  ${(props: StyleProps) =>
    props.sub &&
    css`
      ${({ theme }) => theme.media.mobile`
        display: none;
      `}
    `}
`;

export default HeaderDownList;

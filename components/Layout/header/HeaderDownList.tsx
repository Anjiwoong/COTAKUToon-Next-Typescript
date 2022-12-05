import { MouseEvent } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

import { HeaderTypes } from '../../../types/header-types';

import { BiBell } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { BiBookOpen } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import Button from '../../UI/Button';
import { notImplementedHandler } from '../../../lib/not-implemented';

const HeaderDownList = (props: HeaderTypes) => {
  const { data: session } = useSession();
  const router = useRouter();

  const loginHandler = () => {
    if (session) router.replace('/mypage');
    else signIn();
  };

  const recentWebtoonHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (session) router.replace('/mypage/recent');
    else alert('로그인이 필요한 서비스입니다.');
  };

  return (
    <Wrapper sub={props.sub}>
      <li>
        <Link href="#" onClick={notImplementedHandler}>
          <BiBell />
        </Link>
      </li>
      <li>
        <Link href="#" onClick={notImplementedHandler}>
          <CgShoppingCart />
        </Link>
      </li>
      <li>
        <Link href="#" onClick={recentWebtoonHandler}>
          <BiBookOpen />
        </Link>
      </li>
      <li>
        <Button onClick={loginHandler}>
          <AiOutlineUser />
        </Button>
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
    ${({ theme }) => theme.mixins.flexCenter()};
  }

  button {
    width: 40px;
    height: 40px;

    svg {
      ${({ theme }) => theme.mixins.flexCenter()};
      font-size: 26px;
    }
  }

  ${(props: HeaderTypes) =>
    props.sub &&
    css`
      ${({ theme }) => theme.media.mobile`
        display: none;
      `}
    `}
`;

export default HeaderDownList;

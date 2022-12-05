import Link from 'next/link';
import styled, { css } from 'styled-components';

import { NavItemTypes } from '../../types/home/home-nav-item-types';

import { notImplementedHandler } from '../../lib/not-implemented';

const HomeNav = () => {
  return (
    <nav>
      <NavList>
        <NavItem selected>
          <Link href="#" onClick={notImplementedHandler}>
            웹툰
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#" onClick={notImplementedHandler}>
            만화
          </Link>
        </NavItem>
      </NavList>
      <GenreList>
        <GenreItem selected>
          <Link href="#" onClick={notImplementedHandler}>
            추천
          </Link>
        </GenreItem>
        <GenreItem>
          <Link href="#" onClick={notImplementedHandler}>
            로맨스
          </Link>
        </GenreItem>
      </GenreList>
    </nav>
  );
};

const NavList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()}
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray2};

  ${({ theme }) => theme.media.mobile`
    margin: 0;
  `}
`;

const NavItem = styled.li`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')}
  width: 60px;
  height: 65px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryFont};
  }

  ${(props: NavItemTypes) =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.primaryColor};
      font-weight: 700;
    `}

  ${({ theme }) => theme.media.mobile`
    height: 40px;
    justify-content: center;
  `}

  a {
    display: block;
    font-size: 24px;

    ${({ theme }) => theme.media.mobile`
      font-size: 16px;
    `}
  }
`;

const GenreList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()}
  width: 100%;
  padding: 10px 0;
  height: 52px;

  ${({ theme }) => theme.media.mobile`
    padding: 10px;
    font-size: 14px;
  `}
`;

const GenreItem = styled.li`
  ${({ theme }) => theme.mixins.flexCenter()};
  width: 51px;
  height: 100%;
  margin-right: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryFont};
  }

  ${(props: NavItemTypes) =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 40px;
    `}

  ${({ theme }) => theme.media.mobile`
    margin: 0 3px;
  `}
`;

export default HomeNav;

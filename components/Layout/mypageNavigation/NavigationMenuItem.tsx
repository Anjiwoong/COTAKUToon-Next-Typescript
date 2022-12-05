import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import { MenuTypes } from '../../../types/layout/navigation-types';

import { notImplementedHandler } from '../../../lib/not-implemented';

const NavigationMenuItem = (props: MenuTypes) => {
  const router = useRouter();

  const isSelected = props.path.find(path => path === router.pathname);

  const notImplemented = (e: MouseEvent<HTMLAnchorElement>) => {
    if (props.title === '1 : 1 문의' || props.title === '정보 변경')
      notImplementedHandler(e);
  };

  return (
    <MenuItem>
      <MenuLink
        href={props.path[0]}
        selected={isSelected ? 1 : 0}
        onClick={notImplemented}
      >
        {props.title}
      </MenuLink>
    </MenuItem>
  );
};

const MenuItem = styled.li`
  color: ${({ theme }) => theme.colors.fontGray2};
  font-weight: 700;
  font-size: 14px;
`;

const MenuLink = styled(Link)`
  display: block;
  padding-top: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryFont};
  }

  ${(props: { selected: boolean | number }) =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.blue};

      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    `}
`;

export default NavigationMenuItem;

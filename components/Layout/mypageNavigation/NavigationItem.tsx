import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavigationTypes } from '../../../types/layout/navigation-types';

import { AiFillHome } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import NavigationMenuItem from './NavigationMenuItem';

const NavigationItem = (props: NavigationTypes) => {
  const router = useRouter();
  const isSelected = router.pathname === props.menu[0].path[0];

  return (
    <NavItem>
      {props.menu[0].title === '' && (
        <LinkTitle selected={isSelected}>
          <Link href={props.menu[0].path[0]}>
            <AiFillHome />
            {props.category}
          </Link>
        </LinkTitle>
      )}
      {props.menu[0].title !== '' && (
        <>
          <LinkTitle>
            {props.category === '책' && <BsBookHalf />}
            {props.category === '구매/혜택' && <BsFillCreditCard2BackFill />}
            {props.category === '개인' && <BsFillPersonFill />}
            {props.category}
          </LinkTitle>
          <MenuList>
            {props.menu.map(menu => (
              <NavigationMenuItem
                key={menu.title}
                title={menu.title}
                path={menu.path}
              />
            ))}
          </MenuList>
        </>
      )}
    </NavItem>
  );
};

const NavItem = styled.li`
  padding: 17px 0 19px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderHrGray2};
`;

const LinkTitle = styled.h4`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondaryFont};

  svg {
    margin-right: 6px;
  }

  ${(props: { selected?: boolean }) =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.blue};
    `}
`;

const MenuList = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  padding: 1px 0 0 22px;
`;

export default NavigationItem;

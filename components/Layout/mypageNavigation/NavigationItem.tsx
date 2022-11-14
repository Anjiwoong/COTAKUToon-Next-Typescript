import styled, { css } from 'styled-components';
import { navProps } from './navigation-props';
import { AiFillHome } from 'react-icons/ai';
import Link from 'next/link';
import NavigationMenuItem from './NavigationMenuItem';
import { useRouter } from 'next/router';

const NavigationItem = (props: navProps) => {
  const router = useRouter();
  const isFocused = router.pathname === props.menu[0].path;

  return (
    <NavItem>
      {props.menu[0].title === '' && (
        <LinkTitle focus={isFocused}>
          <Link href={props.menu[0].path}>
            <AiFillHome />
            {props.category}
          </Link>
        </LinkTitle>
      )}
      {props.menu[0].title !== '' && (
        <>
          <LinkTitle>
            <AiFillHome />
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

  ${(props: { focus?: boolean }) =>
    props.focus &&
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

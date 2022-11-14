import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { menuProps } from './navigation-props';

const NavigationMenuItem = (props: menuProps) => {
  const router = useRouter();

  const isFocused = router.pathname === props.path;

  return (
    <MenuItem>
      <MenuLink href={props.path} focus={isFocused ? 1 : 0}>
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

  ${(props: { focus: boolean | number }) =>
    props.focus &&
    css`
      color: ${({ theme }) => theme.colors.blue};

      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    `}
`;

export default NavigationMenuItem;
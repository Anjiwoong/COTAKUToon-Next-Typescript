import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { cashNavProps } from '../../../types/cash-navigation-props';

const MyRidiCashNavigationItem = (props: cashNavProps) => {
  const router = useRouter();

  const isSelected = router.pathname === props.path;

  return (
    <NavItem>
      <CashLink href={props.path} selected={isSelected}>
        {props.title}
      </CashLink>
    </NavItem>
  );
};

const NavItem = styled.li`
  display: inline-block;
  margin-right: 13px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 12px;
`;

const CashLink = styled(Link)`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.fontGray2};
  display: block;
  position: relative;
  min-width: 25px;
  padding: 10px 0;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.fontGray7};

    &::after {
      content: '';
      display: block;
      height: 3px;
      background: ${({ theme }) => theme.colors.fontGray7};
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    background: ${({ theme }) => theme.colors.gray2};
    left: 0;
    bottom: -2px;
  }

  ${(props: { selected: boolean }) =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.mySecondaryTitle};

      &::after {
        content: '';
        display: block;
        height: 3px;
        background: ${({ theme }) => theme.colors.blue};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.mySecondaryTitle};

        &::after {
          background: ${({ theme }) => theme.colors.blue};
        }
      }
    `}
`;

export default MyRidiCashNavigationItem;

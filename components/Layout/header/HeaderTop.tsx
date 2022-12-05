import Link from 'next/link';
import styled, { css } from 'styled-components';

import { HeaderTypes } from '../../../types/layout/header-types';

import { IoIosArrowForward } from 'react-icons/io';
import { notImplementedHandler } from '../../../lib/not-implemented';

const HeaderTop = (props: HeaderTypes) => {
  return (
    <HeaderWrap sub={props.sub}>
      <Container>
        <ul>
          <Item dot>
            <HeaderLink href="/" selected onClick={notImplementedHandler}>
              웹툰/만화
            </HeaderLink>
          </Item>
          <Item dot>
            <HeaderLink href="/" onClick={notImplementedHandler}>
              웹소설
            </HeaderLink>
          </Item>
          <Item dot>
            <HeaderLink href="/" onClick={notImplementedHandler}>
              도서
            </HeaderLink>
          </Item>
          <Item>
            <HeaderLink href="/" onClick={notImplementedHandler}>
              셀렉트
              <IoIosArrowForward />
            </HeaderLink>
          </Item>
        </ul>
      </Container>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray2};
  font-size: 14px;

  ${({ theme }) => theme.media.mobile`
    background: ${theme.colors.black};
    border-bottom: 0;
  `}

  ${(props: HeaderTypes) =>
    props.sub &&
    css`
      ${({ theme }) => theme.media.mobile`
        display: none;
      `}
    `}
`;

const Container = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'nowrap')}
  ${({ theme }) => theme.mixins.autoMargin()}

  max-width: 1170px;
  padding: 0 30px;

  ${({ theme }) => theme.media.mobile`
    height: 39px;
  `}

  ul {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')}

    ${({ theme }) => theme.media.mobile`
      width: 100%;
      justify-content: space-around;
      font-size: 13px;
    `}
  }
`;

const Item = styled.li`
  position: relative;
  padding: 11px 12px;

  &:first-child {
    padding-left: 0;
  }

  ${(props: HeaderTypes) =>
    props.dot &&
    css`
      &::after {
        ${({ theme }) => theme.mixins.centerTranslateY()}

        content: '';
        position: absolute;
        right: 0;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background: ${({ theme }) => theme.colors.gray6};

        ${({ theme }) => theme.media.mobile`
          display: none;
        `}
      }
    `}
`;

const HeaderLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.gray2};

    ${({ theme }) => theme.media.mobile`
      color: ${theme.colors.secondaryFont}
    `}
  }

  &:last-child {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')}
  }

  svg {
    font-size: 12px;
    margin-left: 4px;
    margin-bottom: 2px;
  }

  ${(props: HeaderTypes) =>
    props.selected &&
    css`
      color: ${({ theme }) => theme.colors.black};

      ${({ theme }) => theme.media.mobile`
        color: ${theme.colors.white}
      `}
    `}
`;

export default HeaderTop;

import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { StyleProps } from '../../types/header-props';

const HeaderDownLogo = (props: StyleProps) => {
  return (
    <LogoWrapper sub={props.sub}>
      <Link href="/">
        <span>리디 홈으로 이동</span>
        <Image
          src="/images/header/cotaku-01.svg"
          alt="cotaku-logo"
          width={108}
          height={20}
          priority
        />
        <Image
          src="/images/header/toon-02.svg"
          alt="toon-logo"
          width={78}
          height={20}
          priority
        />
      </Link>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.h1`
  margin-right: auto;

  ${({ theme }) => theme.media.mobile`
      width: 171px;
    `}

  a {
    ${({ theme }) => theme.mixins.flexBox()}
  }

  span {
    ${({ theme }) => theme.mixins.a11yHidden()}
  }

  img {
    ${({ theme }) => theme.media.mobile`
        height: 42px;
        padding: 13px 5px 14px 16px;
      `}

    &:last-child {
      height: 20px;
      margin-left: 5px;

      ${({ theme }) => theme.media.mobile`
        height: 42px;
        padding: 13px 0 14px 0;
      `}
    }
  }

  ${(props: StyleProps) =>
    props.sub &&
    css`
      margin-right: auto;

      img {
        height: 20px;

        ${({ theme }) => theme.media.mobile`
          width: auto;
          height: 42px;
          padding: 13px 5px 14px 16px;
        `}

        &:last-child {
          display: none;
        }
      }
    `}
`;

export default HeaderDownLogo;

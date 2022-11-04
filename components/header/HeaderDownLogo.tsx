import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderDownLogo = () => {
  return (
    <LogoWrapper>
      <Link href="/">
        <span>리디 홈으로 이동</span>
        <Image
          src="/images/header/cotaku-01.svg"
          alt="cotaku-logo"
          width={108}
          height={20}
        />
        <Image
          src="/images/header/toon-02.svg"
          alt="toon-logo"
          width={78}
          height={20}
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
`;

export default HeaderDownLogo;

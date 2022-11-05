import Link from 'next/link';
import styled from 'styled-components';

import { BiBell } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { BiBookOpen } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

const HeaderDownList = () => {
  return (
    <Wrapper>
      <li>
        <Link href="/">
          <BiBell />
        </Link>
      </li>
      <li>
        <Link href="/">
          <CgShoppingCart />
        </Link>
      </li>
      <li>
        <Link href="/">
          <BiBookOpen />
        </Link>
      </li>
      <li>
        <Link href="/">
          <AiOutlineUser />
        </Link>
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
    ${({ theme }) => theme.mixins.flexCenter()}
  }
`;

export default HeaderDownList;

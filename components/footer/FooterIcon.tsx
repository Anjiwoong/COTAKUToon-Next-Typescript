import Link from 'next/link';
import styled from 'styled-components';

import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { notImplementedHandler } from '../../lib/not-implemented';

const iconList = ['facebook', 'instagram', 'youtube'];

const FooterIcon = () => {
  return (
    <IconList>
      {iconList.map(icon => (
        <li key={icon}>
          <Link href="#" onClick={notImplementedHandler}>
            {icon === 'facebook' && <FaFacebookF />}
            {icon === 'instagram' && <BsInstagram />}
            {icon === 'youtube' && <BsYoutube />}
          </Link>
        </li>
      ))}
    </IconList>
  );
};

const IconList = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()};
  ${({ theme }) => theme.mixins.paddingX('4px')};
  padding-bottom: 30px;

  li {
    color: ${({ theme }) => theme.colors.fontGray1};
    margin-left: 10px;

    &:nth-child(1) {
      margin-left: 0;
    }

    a {
      width: 44px;
      height: 44px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.colors.gray6};
      border-radius: 22px;
    }
  }
`;

export default FooterIcon;

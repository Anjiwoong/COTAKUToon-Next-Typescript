import Link from 'next/link';
import styled from 'styled-components';
import { ArrivalTypes } from '../../../types/new-arrival-types';
import { BiBookOpen } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { BiPlanet } from 'react-icons/bi';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineEventNote } from 'react-icons/md';
import { FiBox } from 'react-icons/fi';
import { notImplementedHandler } from '../../../lib/not-implemented';

const NewArrivalSectionItem = ({ title }: ArrivalTypes) => {
  return (
    <li>
      <Link href="#" onClick={notImplementedHandler}>
        <IconWrapper>
          {title === '신간' && <BiBookOpen />}
          {title === '이달의 신작' && <MdOutlineEventNote />}
          {title === '이벤트' && <BsBell />}
          {title === '독점' && <BiPlanet />}
          {title === '리다무' && <BiTimeFive />}
          {title === '19+' && <AiOutlineHeart />}
          {title === '위클리 쿠폰' && <FiBox />}
        </IconWrapper>
        <span>{title}</span>
      </Link>
    </li>
  );
};

const IconWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter()};
  background: ${({ theme }) => theme.colors.gray5};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-bottom: 8px;

  ${({ theme }) => theme.media.mobile`
    width: 56px;
    height: 56px;
  `};

  svg {
    font-size: 24px;

    ${({ theme }) => theme.media.mobile`
      font-size: 18px;
    `};
  }
`;

export default NewArrivalSectionItem;

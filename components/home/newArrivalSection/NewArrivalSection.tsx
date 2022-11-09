import Link from 'next/link';
import styled from 'styled-components';
import { BiBookOpen } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { BiPlanet } from 'react-icons/bi';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineEventNote } from 'react-icons/md';
import { FiBox } from 'react-icons/fi';

const NewArrivalSection = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="#">
            <IconWrapper>
              <BiBookOpen />
            </IconWrapper>
            <span>신간</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconWrapper>
              <BsBell />
            </IconWrapper>
            <span>이벤트</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconWrapper>
              <BiPlanet />
            </IconWrapper>
            <span>독점</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconWrapper>
              <BiTimeFive />
            </IconWrapper>
            <span>리다무</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconWrapper>
              <AiOutlineHeart />
            </IconWrapper>
            <span>19+</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconWrapper>
              <MdOutlineEventNote />
            </IconWrapper>
            <span>이달의 신작</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <IconWrapper>
              <FiBox />
            </IconWrapper>
            <span>위클리 쿠폰</span>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 30px 30px 0;

  ${({ theme }) => theme.media.mobile`
    margin: 0;
  `}

  ul {
    ${({ theme }) => theme.mixins.flexCenter()};

    ${({ theme }) => theme.media.mobile`
      ${theme.mixins.autoMargin()};
    `};
  }

  li {
    text-align: center;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    ${({ theme }) => theme.media.mobile`
      margin-right: 10px;
    `};
  }

  span {
    font-size: 13px;

    ${({ theme }) => theme.media.mobile`
      font-size: 11px;
    `};
  }
`;

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

export default NewArrivalSection;

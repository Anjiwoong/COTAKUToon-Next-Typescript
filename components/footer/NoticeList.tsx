import Link from 'next/link';
import styled from 'styled-components';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { AiOutlineNotification } from 'react-icons/ai';

const NoticeList = () => {
  return (
    <Wrapper>
      <li>
        <RiCustomerService2Fill />
        <Link href="#"> 고객센터</Link>
      </li>
      <li>
        <AiOutlineNotification />
        <Link href="#">공지사항</Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  width: 185px;

  ${({ theme }) => theme.media.mobile`
    width: auto;
    flex-direction: row;
    margin-bottom: 30px;
  `}

  li {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
    margin: 10px 0;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: ${({ theme }) => theme.colors.fontGray1};

    &:hover {
      opacity: 0.6;
    }

    ${({ theme }) => theme.media.mobile`
      flex: 1;
      margin: 0;
    `}

    svg {
      width: 24px;
      height: 24px;
    }

    a {
      margin-left: 4px;
    }
  }
`;

export default NoticeList;

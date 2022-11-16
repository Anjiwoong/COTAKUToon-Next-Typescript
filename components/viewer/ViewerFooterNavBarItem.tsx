import Link from 'next/link';
import styled from 'styled-components';
import Button from '../UI/Button';
import { AiOutlineHome } from 'react-icons/ai';

const ViewerFooterNavBarItem = () => {
  // li 컴포넌트 분리

  return (
    <li>
      <FooterNavItemButton>
        <Link href="/webtoon">
          <AiOutlineHome />
          <Title>연재 홈</Title>
          <Comment>4,398</Comment>
        </Link>
      </FooterNavItemButton>
    </li>
  );
};

const FooterNavItemButton = styled(Button)`
  color: ${({ theme }) => theme.colors.gray7};
  font-size: 24px;

  a {
    ${({ theme }) =>
      theme.mixins.flexBox('column', 'flex-start', 'center', 'nowrap')};
    position: relative;
  }
`;

const Title = styled.span`
  font-size: 11px;
  margin-top: 3px;
`;

const Comment = styled.span`
  position: absolute;
  top: -3px;
  right: -20px;
  background: ${({ theme }) => theme.colors.gray2};
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 25px;
  font-size: 9px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
  letter-spacing: -0.5px;
  padding: 2px 4px;
`;

export default ViewerFooterNavBarItem;

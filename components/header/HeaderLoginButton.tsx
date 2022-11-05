import Link from 'next/link';
import styled from 'styled-components';

const HeaderLoginButton = () => {
  return (
    <Login>
      <Link href="/login">
        <span>로그인</span>
      </Link>
    </Login>
  );
};

const Login = styled.div`
  display: none;

  ${({ theme }) => theme.media.mobile`
    display: block;
    position: absolute;
    font-size: 12px;
    top: 16px;
    right: 22px;
  `}

  a {
    display: block;
    width: 100%;
    padding: 6px 12px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray1};
    border-radius: 16px;
  }
`;

export default HeaderLoginButton;

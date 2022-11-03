import Link from 'next/link';
import styled from 'styled-components';

const LoginHeader = () => {
  return (
    <LoginHeaderWrap>
      <h1>
        <Link href="/">COTAKU</Link>
      </h1>
    </LoginHeaderWrap>
  );
};

const LoginHeaderWrap = styled.div`
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray3};
  text-align: center;
  font-size: 19px;
  font-weight: 700;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.blue};

  a {
    ${({ theme }) => theme.mixins.paddingX('14px')};
  }
`;

export default LoginHeader;

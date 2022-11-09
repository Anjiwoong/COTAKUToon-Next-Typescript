import Link from 'next/link';
import styled from 'styled-components';
import Button from '../UI/Button';

const SignupButton = () => {
  return (
    <SignupLink href="/signup">
      <Button signup>회원가입</Button>
    </SignupLink>
  );
};

const SignupLink = styled(Link)`
  ${({ theme }) => theme.mixins.autoMargin()}
  ${({ theme }) => theme.mixins.paddingX('10px')}

  display: block;
  width: 360px;
`;

export default SignupButton;

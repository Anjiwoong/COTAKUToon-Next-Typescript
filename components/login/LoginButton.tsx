import styled from 'styled-components';
import Button from '../UI/Button';

const LoginButton = () => {
  return (
    <>
      <ErrorMessage></ErrorMessage>
      <Button login>로그인</Button>
    </>
  );
};

const ErrorMessage = styled.span`
  display: block;
  width: 100%;
  margin: 4px 0;
  padding-left: 4px;
  height: 20px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 11px;
  font-weight: 700;
`;

export default LoginButton;

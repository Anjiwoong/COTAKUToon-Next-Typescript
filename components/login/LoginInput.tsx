import Input from '../UI/Input';
import { loginProps } from '../../types/login-props';

const LoginInput = (props: loginProps) => {
  return (
    <>
      <legend>로그인</legend>
      <Input
        type="text"
        name="userid"
        placeholder="아이디"
        autoComplete="off"
        login
        ref={props.idRef}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        login
        password
        ref={props.passwordRef}
      />
    </>
  );
};

export default LoginInput;

import Input from '../UI/Input';

const LoginInput = () => {
  return (
    <>
      <legend>로그인</legend>
      <Input
        type="text"
        name="userid"
        placeholder="아이디"
        autoComplete="off"
        login
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        login
        password
      />
    </>
  );
};

export default LoginInput;

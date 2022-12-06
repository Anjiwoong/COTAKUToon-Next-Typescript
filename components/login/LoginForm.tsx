import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import LoginInfo from './LoginInfo';
import LoginInput from './LoginInput';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const enteredId = idRef.current?.value;
    const enteredPassword = passwordRef.current?.value;

    try {
      const result = await signIn('user-credentials', {
        id: enteredId,
        password: enteredPassword,
        redirect: false,
      });

      await router.replace('/');
      setIsLoading(false);
    } catch (err) {
      alert('로그인 정보를 확인해주세요');
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <LoginFormWrap onSubmit={submitHandler}>
      <fieldset>
        <LoginInput idRef={idRef} passwordRef={passwordRef} />
        <LoginInfo />
        <LoginButton loading={isLoading} />
      </fieldset>
    </LoginFormWrap>
  );
};

const LoginFormWrap = styled.form`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) => theme.mixins.paddingX('10px')};
  ${({ theme }) => theme.mixins.paddingY('10px')};

  width: 360px;
  margin-top: 80px;
`;

export default LoginForm;

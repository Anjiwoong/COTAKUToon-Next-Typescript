import { signIn } from 'next-auth/client';
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

    const result = await signIn('credentials', {
      redirect: false,
      id: enteredId,
      password: enteredPassword,
    });

    if (!result?.error) {
      await router.replace('/');
      setIsLoading(false);
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

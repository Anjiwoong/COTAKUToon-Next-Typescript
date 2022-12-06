import { useRouter } from 'next/router';
import { FormEvent, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { createUser } from '../../lib/create-user';

import {
  CheckStateTypes,
  SignupInputTypes,
  ValidInputTypes,
} from '../../types/signup/signup-types';

import Button from '../UI/Button';
import SignupBirth from './SignupBirth';
import SignupEmail from './SignupEmail';
import SignupId from './SignupId';
import SignupName from './SignupName';
import SignupPassword from './SignupPassword';
import SignupTos from './SignupTos';

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<CheckStateTypes>({
    id: false,
    password: false,
    email: false,
    name: false,
    birth: false,
    tos: false,
  });

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const checkHandler = (check: boolean, inputName: string) => {
    setIsChecked(prev => ({ ...prev, [inputName]: check }));
  };

  useEffect(() => {
    const isAllCheck = Object.values(isChecked).every(check => check === true);

    if (isAllCheck) setAllCheck(true);
    else setAllCheck(false);
  }, [isChecked]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const enteredId = idRef.current?.value;
    const enteredPassword = passwordRef.current?.value;
    const enteredEmail = emailRef.current?.value;
    const enteredBirth = birthRef.current?.value;
    const recentWebtoon: [] = [];

    try {
      const result = await createUser(
        enteredId,
        enteredPassword,
        enteredEmail,
        enteredBirth,
        recentWebtoon
      );

      if (!result.error) {
        alert('회원가입이 완료되었습니다.');
        await router.replace('/login');
        setIsLoading(false);
      }
    } catch (error) {
      alert('이미 사용중인 아이디입니다.');
      console.log(error);
    }
  };

  return (
    <SignupFormWrap onSubmit={submitHandler}>
      <fieldset>
        <legend>회원가입</legend>
        <SignupId checkHandler={checkHandler} inputRef={idRef} />
        <SignupPassword checkHandler={checkHandler} inputRef={passwordRef} />
        <SignupEmail checkHandler={checkHandler} inputRef={emailRef} />
        <SignupName checkHandler={checkHandler} />
        <SignupBirth checkHandler={checkHandler} inputRef={birthRef} />
        <SignupTos checkHandler={checkHandler} />
        <Button submit disabled={!allCheck}>
          {isLoading ? '회원가입 하는 중...' : '회원 가입 완료'}
        </Button>
      </fieldset>
    </SignupFormWrap>
  );
};

const SignupFormWrap = styled.form`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) => theme.mixins.marginY('40px')};
  ${({ theme }) => theme.mixins.paddingX('10px')};
  ${({ theme }) => theme.mixins.paddingY('10px')};

  width: 360px;
  font-size: 14px;
`;

export const SignupInput = styled.div`
  position: relative;
  width: 340px;
  height: 48px;
  margin-top: 25px;

  ${(props: SignupInputTypes) =>
    props.margin &&
    css`
      margin-top: 0;
    `}

  ${(props: SignupInputTypes) =>
    props.pwd &&
    css`
      input {
        border-radius: 4px 4px 0 0;
      }
    `}

  ${(props: SignupInputTypes) =>
    props.check &&
    css`
      margin-top: 0;

      input {
        border-top: 0;
        border-radius: 0 0 4px 4px;
      }
    `}
`;

export const SignupInputText = styled.span`
  ${({ theme }) => theme.mixins.centerTranslateY()};

  position: absolute;
  left: 10px;
  color: ${({ theme }) => theme.colors.fontGray2};

  ${(props: ValidInputTypes) =>
    props.text &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      transform: translateY(-20px);
      transition: all 0.2s ease;
      font-size: 11px;
    `}

  ${(props: ValidInputTypes) =>
    props.valid &&
    css`
      transform: translateY(-20px);
      font-size: 11px;
    `}
`;

export const ErrorMessage = styled.span`
  display: block;
  margin: 4px 0;
  padding-left: 4px;
  width: 100%;
  height: 20px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 11px;
  font-weight: 700;
`;

export default SignupForm;

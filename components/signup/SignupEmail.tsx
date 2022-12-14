import { useEffect } from 'react';

import useInput from '../../hooks/use-input';
import { CheckTypes } from '../../types/signup/signup-types';

import Input from '../UI/Input';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

const SignupEmail = (props: CheckTypes) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
  } = useInput((value: any) => value.match(emailRegex));

  const { checkHandler } = props;

  useEffect(() => {
    checkHandler(!!emailIsValid, 'email');
  }, [!!emailIsValid]);

  return (
    <SignupInput>
      <SignupInputText
        text={emailValue !== '' && !emailIsValid}
        valid={!!emailIsValid}
      >
        {emailValue !== '' && !emailIsValid ? '이메일 주소' : '이메일'}
      </SignupInputText>
      <Input
        type="email"
        name="userEmail"
        autoComplete="off"
        box
        value={emailValue}
        onChange={emailChangeHandler}
        ref={props.inputRef}
      />
      {emailValue !== '' && !emailIsValid && (
        <ErrorMessage>! 이메일 형식에 맞게 입력해 주세요.</ErrorMessage>
      )}
    </SignupInput>
  );
};

export default SignupEmail;

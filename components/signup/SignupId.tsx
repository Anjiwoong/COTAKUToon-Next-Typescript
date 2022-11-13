import React, { useEffect } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import { checkProps } from './signup-props';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const idRegex = /^[A-Za-z0-9]{4,15}$/;

const SignupId = (props: checkProps) => {
  const {
    value: idValue,
    isValid: idIsValid,
    valueChangeHandler: idChangeHandler,
  } = useInput((value: any) => value.match(idRegex));

  const { checkHandler } = props;

  useEffect(() => {
    checkHandler(!!idIsValid, 'id');
  }, [!!idIsValid]);

  return (
    <SignupInput>
      <SignupInputText text={idValue !== '' && !idIsValid} valid={!!idIsValid}>
        {idValue !== '' && !idIsValid ? '4~10자 영문,숫자 입력' : '아이디'}
      </SignupInputText>
      <Input
        type="text"
        autoComplete="off"
        box
        value={idValue}
        onChange={idChangeHandler}
        ref={props.inputRef}
      />
      {idValue !== '' && !idIsValid && (
        <ErrorMessage>! 아이디를 입력해 주세요.</ErrorMessage>
      )}
    </SignupInput>
  );
};

export default SignupId;

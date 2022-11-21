import { useEffect } from 'react';
import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import { checkProps } from '../../types/signup-props';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const nameRegex = /^[가-힣]{2,5}$/;

const SignupName = (props: checkProps) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
  } = useInput((value: any) => value.match(nameRegex));

  const { checkHandler } = props;

  useEffect(() => {
    checkHandler(!!nameIsValid, 'name');
  }, [!!nameIsValid]);

  return (
    <SignupInput>
      <SignupInputText
        text={nameValue !== '' && !nameIsValid}
        valid={!!nameIsValid}
      >
        이름
      </SignupInputText>
      <Input
        type="text"
        name="username"
        autoComplete="off"
        box
        value={nameValue}
        onChange={nameChangeHandler}
      />
      {nameValue !== '' && !nameIsValid && (
        <ErrorMessage>! 이름을 입력해 주세요.</ErrorMessage>
      )}
    </SignupInput>
  );
};

export default SignupName;

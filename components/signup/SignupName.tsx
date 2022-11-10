import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const nameRegex = /^[가-힣]{2,5}$/;

const SignupName = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value: any) => value.match(nameRegex));

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
        onBlur={nameBlurHandler}
      />
      {nameValue !== '' && !nameIsValid && (
        <ErrorMessage>! 이름을 입력해 주세요.</ErrorMessage>
      )}
    </SignupInput>
  );
};

export default SignupName;

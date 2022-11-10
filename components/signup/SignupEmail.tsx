import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

const SignupEmail = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value: any) => value.match(emailRegex));

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
        onBlur={emailBlurHandler}
      />
      {emailValue !== '' && !emailIsValid && (
        <ErrorMessage>! 이메일 형식에 맞게 입력해 주세요.</ErrorMessage>
      )}
    </SignupInput>
  );
};

export default SignupEmail;

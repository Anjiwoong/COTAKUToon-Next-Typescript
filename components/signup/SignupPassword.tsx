import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const passwordRegex = /^[A-Za-z0-9]{6,12}$/;

const SignupPassword = () => {
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value: any) => value.match(passwordRegex));

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput((value: any) => value !== '' && value === passwordValue);

  return (
    <>
      <SignupInput pwd>
        <SignupInputText
          text={passwordValue !== '' && !passwordIsValid}
          valid={!!passwordIsValid}
        >
          {passwordValue !== '' && !passwordIsValid
            ? '6~12자 영문, 숫자 중 2가지 이상 입력'
            : '비밀번호'}
        </SignupInputText>
        <Input
          type="password"
          box
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
      </SignupInput>
      <SignupInput check>
        <SignupInputText
          text={confirmPasswordValue !== '' && !confirmPasswordIsValid}
          valid={!!confirmPasswordIsValid}
        >
          {confirmPasswordValue !== '' && !confirmPasswordIsValid
            ? '비밀번호 재입력'
            : '비밀번호 확인'}
        </SignupInputText>
        <Input
          type="password"
          box
          value={confirmPasswordValue}
          onChange={confirmPasswordChangeHandler}
          onBlur={confirmPasswordBlurHandler}
        />
        {passwordValue !== '' && !passwordIsValid && (
          <ErrorMessage>! 비밀번호 형식에 맞게 입력해 주세요.</ErrorMessage>
        )}
        {confirmPasswordValue !== '' && !confirmPasswordIsValid && (
          <ErrorMessage>! 패스워드가 일치하지 않습니다.</ErrorMessage>
        )}
      </SignupInput>
    </>
  );
};

export default SignupPassword;

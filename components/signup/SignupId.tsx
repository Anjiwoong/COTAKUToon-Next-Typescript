import useInput from '../../hooks/use-input';
import Input from '../UI/Input';
import { ErrorMessage, SignupInput, SignupInputText } from './SignupForm';

const idRegex = /^[A-Za-z0-9]{4,15}$/;

const SignupId = () => {
  const {
    value: idValue,
    isValid: idIsValid,
    hasError: idHasError,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
    reset: resetId,
  } = useInput((value: any) => value.match(idRegex));

  console.log(idHasError);

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
        onBlur={idBlurHandler}
      />
      {idValue !== '' && !idIsValid && (
        <ErrorMessage>! 아이디를 입력해 주세요.</ErrorMessage>
      )}
    </SignupInput>
  );
};

export default SignupId;

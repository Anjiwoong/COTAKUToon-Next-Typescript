import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useInput from '../../hooks/use-input';
import Button from '../UI/Button';
import { ButtonProps } from '../UI/button-props';
import Input from '../UI/Input';
import { checkProps } from './signup-props';
import { ErrorMessage, SignupInputText } from './SignupForm';

const birthRegex = /^[0-9]{4,4}$/;

const SignupBirth = (props: checkProps) => {
  const [isSelected, setIsSelected] = useState(true);

  const {
    value: birthValue,
    isValid: birthIsValid,
    valueChangeHandler: birthChangeHandler,
  } = useInput((value: any) => value.match(birthRegex));

  const toggleButton = () => setIsSelected(prev => !prev);

  const { checkHandler } = props;

  useEffect(() => {
    checkHandler(!!birthIsValid, 'birth');
  }, [!!birthIsValid]);

  return (
    <SignupOption>
      <OptionArea>
        <Birth>
          <SignupInputText
            text={birthValue !== '' && !birthIsValid}
            valid={!!birthIsValid}
          >
            {birthValue !== '' && !birthIsValid ? '예) 1991' : '출생년도'}
          </SignupInputText>
          <Input
            type="text"
            name="birth"
            autoComplete="off"
            box
            value={birthValue}
            onChange={birthChangeHandler}
          />
        </Birth>
        <Gender>
          <SelectedButton
            aria-label="남성"
            type="button"
            gender
            selected={isSelected}
            onClick={toggleButton}
          >
            남
          </SelectedButton>
          <SelectedButton
            aria-label="여성"
            type="button"
            gender
            selected={!isSelected}
            onClick={toggleButton}
          >
            여
          </SelectedButton>
        </Gender>
      </OptionArea>
      <ErrorMessage>
        {birthValue !== '' && !birthIsValid
          ? '! 출생년도 4자리를 입력해 주세요.'
          : ''}
      </ErrorMessage>
    </SignupOption>
  );
};

const SignupOption = styled.div`
  margin-top: 25px;
`;

const OptionArea = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};

  position: relative;
  margin-top: 8px;
`;

const Birth = styled.div`
  width: 50%;
  height: 48px;

  input {
    width: 100%;
    height: 100%;
  }
`;

const Gender = styled.div`
  width: 48%;
  height: 48px;
  border-radius: 4px;
`;

const SelectedButton = styled(Button)`
  ${(props: ButtonProps) =>
    props.selected &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.fontSkyBlue};
      background: ${({ theme }) => theme.colors.bgLightBlue2};
      pointer-events: none;
    `}
`;

export default SignupBirth;

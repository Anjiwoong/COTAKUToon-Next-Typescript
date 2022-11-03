import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { ErrorMessage, SignupInputText } from './SignupForm';

const SignupBirth = () => {
  return (
    <SignupOption>
      <p>선택 입력</p>
      <OptionArea>
        <Birth>
          <SignupInputText>출생년도</SignupInputText>
          <Input type="text" name="birth" autoComplete="off" box />
        </Birth>
        <Gender>
          <Button aria-label="남성" type="button" gender>
            남
          </Button>
          <Button aria-label="여성" type="button" gender>
            여
          </Button>
        </Gender>
      </OptionArea>
      <ErrorMessage></ErrorMessage>
    </SignupOption>
  );
};

const SignupOption = styled.div`
  margin-top: 25px;

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.fontGray2};
  }
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

export default SignupBirth;

import styled, { css } from 'styled-components';
import Button from '../UI/Button';
import { StyleProps, validInputProps } from './signup-props';
import SignupBirth from './SignupBirth';
import SignupEmail from './SignupEmail';
import SignupId from './SignupId';
import SignupName from './SignupName';
import SignupPassword from './SignupPassword';
import SignupTos from './SignupTos';

const SignupForm = () => {
  return (
    <SignupFormWrap>
      <fieldset>
        <legend>회원가입</legend>
        <SignupId />
        <SignupPassword />
        <SignupEmail />
        <SignupName />
        <SignupBirth />
        <SignupTos />
        <Button submit disabled>
          회원 가입 완료
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

  ${(props: StyleProps) =>
    props.margin &&
    css`
      margin-top: 0;
    `}

  ${(props: StyleProps) =>
    props.pwd &&
    css`
      input {
        border-radius: 4px 4px 0 0;
      }
    `}

  ${(props: StyleProps) =>
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

  ${(props: validInputProps) =>
    props.text &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      transform: translateY(-20px);
      transition: all 0.2s ease;
      font-size: 11px;
    `}

  ${(props: validInputProps) =>
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

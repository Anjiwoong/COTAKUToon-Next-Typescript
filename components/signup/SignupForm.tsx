import styled, { css } from 'styled-components';
import Button from '../UI/Button';
import Input from '../UI/Input';
import SignupBirth from './SignupBirth';
import SignupTos from './SignupTos';

interface StyleProps {
  margin?: boolean;
  pwd?: boolean;
  check?: boolean;
}

const SignupForm = () => {
  return (
    <SignupFormWrap>
      <fieldset>
        <legend>회원가입</legend>
        <SignupInput>
          <SignupInputText>아이디</SignupInputText>
          <Input type="text" name="userId" autoComplete="off" box />
          <ErrorMessage></ErrorMessage>
        </SignupInput>
        <div>
          <SignupInput pwd>
            <SignupInputText>비밀번호</SignupInputText>
            <Input type="password" name="password" box />
          </SignupInput>
          <SignupInput check>
            <SignupInputText>비밀번호 확인</SignupInputText>
            <Input type="password" name="confirmPassword" box />
          </SignupInput>
          <ErrorMessage></ErrorMessage>
        </div>
        <SignupInput margin>
          <SignupInputText>이메일 주소</SignupInputText>
          <Input type="email" name="userEmail" autoComplete="off" box />
          <ErrorMessage></ErrorMessage>
        </SignupInput>
        <SignupInput>
          <SignupInputText>이름</SignupInputText>
          <Input type="text" name="username" autoComplete="off" box />
          <ErrorMessage></ErrorMessage>
        </SignupInput>
        <SignupBirth />
        <SignupTos />
        <Button type="button" submit disabled>
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

const SignupInput = styled.div`
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

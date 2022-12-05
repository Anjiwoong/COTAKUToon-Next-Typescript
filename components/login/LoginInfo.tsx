import styled from 'styled-components';

import { notImplementedHandler } from '../../lib/not-implemented';
import Input from '../UI/Input';

const LoginInfo = () => {
  return (
    <LoginInfoWrap>
      <div>
        <Input type="checkbox" id="login-chk" />
        <label htmlFor="login-chk">
          <SaveBox></SaveBox>
          <span>로그인 상태 유지</span>
        </label>
      </div>
      <LoginInfoRight>
        <SearchId role="button" onClick={notImplementedHandler}>
          아이디 찾기
        </SearchId>
        <span role="button" onClick={notImplementedHandler}>
          비밀번호 재설정
        </span>
      </LoginInfoRight>
    </LoginInfoWrap>
  );
};

const LoginInfoWrap = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')}

  height: 45px;
  background: ${({ theme }) => theme.colors.bgLightBlue};
  border-radius: 0 0 4px 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray3};
  border-top: 0;
  padding: 13px 8px 16px 13px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fontSkyBlue};

  [type='checkbox'] {
    display: none;

    &:checked + label span:nth-child(1)::before {
      content: '';
      position: absolute;
      top: 3px;
      right: 2px;
      width: 10px;
      height: 5px;
      transform: rotate(-45deg);
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.blue};
      border-width: 0px 0px 2px 2px;
    }
  }

  label {
    cursor: pointer;

    &:hover {
      color: $blue;
    }
  }
`;

const SaveBox = styled.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray3};
  border-radius: 2px;
  box-shadow: inset 0 1px 2px 0 rgb(115 128 150 / 20%);
  transform: translateY(3px);
  margin-right: 3px;
`;

const LoginInfoRight = styled.div`
  transform: translateY(2px);

  span {
    padding: 0 6px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const SearchId = styled.span`
  position: relative;
  margin-right: -4px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.borderGray3};
    transform: translateY(1px);
  }
`;

export default LoginInfo;

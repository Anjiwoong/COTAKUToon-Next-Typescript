import Link from 'next/link';
import styled from 'styled-components';
import Input from '../UI/Input';

const SignupTos = () => {
  return (
    <Tos>
      <AllAgree>
        <Input type="checkbox" name="tosCheck" id="signup-chk1" />
        <label htmlFor="signup-chk1">
          <span></span>
          <span>선택 포함 전체 약관 동의</span>
        </label>
      </AllAgree>
      <ul>
        <TosItem>
          <Input type="checkbox" name="tosCheck" id="tos-chk1" />
          <label htmlFor="tos-chk1">
            <span></span>
            <span>이용약관 동의(필수)</span>
          </label>
          <Link href="/error">약관 보기</Link>
        </TosItem>
        <TosItem>
          <Input type="checkbox" name="tosCheck" id="tos-chk2" />
          <label htmlFor="tos-chk2">
            <span></span>
            <span>이용약관 동의(필수)</span>
          </label>
          <Link href="/error">약관 보기</Link>
        </TosItem>
        <TosItem>
          <Input type="checkbox" name="tosCheck" id="tos-chk3" />
          <label htmlFor="tos-chk3">
            <span></span>
            <span>이용약관 동의(필수)</span>
          </label>
          <Link href="/error">약관 보기</Link>
        </TosItem>
        <TosItem>
          <Input type="checkbox" name="tosCheck" id="tos-chk4" />
          <label htmlFor="tos-chk4">
            <span></span>
            <span>이용약관 동의(필수)</span>
          </label>
          <Link href="/error">약관 보기</Link>
        </TosItem>
      </ul>
    </Tos>
  );
};

const Tos = styled.div`
  width: 340px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fontSkyBlue};

  label {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};

    cursor: pointer;

    span:nth-child(1) {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 1px solid ${({ theme }) => theme.colors.gray1};
      border-radius: 50%;
      margin-right: 6px;

      &::before {
        content: '';
        position: absolute;
        top: 5px;
        right: 4px;
        width: 8px;
        height: 5px;
        transform: rotate(-45deg);
        border-style: solid;
        border-color: ${({ theme }) => theme.colors.gray1};
        border-width: 0px 0px 2px 2px;
      }
    }

    &:hover span:nth-child(2) {
      color: ${({ theme }) => theme.colors.primaryFont};
    }
  }

  [type='checkbox'] {
    display: none;

    &:checked + label > span:nth-child(1),
    &:checked + label > span:nth-child(1)::before {
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }

  ul {
    ${({ theme }) => theme.mixins.paddingX('13px')};
  }
`;

const AllAgree = styled.div`
  ${({ theme }) => theme.mixins.paddingX('13px')};
  ${({ theme }) => theme.mixins.paddingY('13px')};

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  font-weight: 600;
`;

const TosItem = styled.li`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.marginY('15px')};

  a {
    position: relative;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.borderGray4};
    margin-right: 10px;

    &::after {
      content: '';
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 6px;
      height: 6px;
      border-style: solid;
      border-width: 1px 1px 0 0;
      border-color: ${({ theme }) => theme.colors.borderGray4};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.fontGray2};

      &::after {
        border-color: ${({ theme }) => theme.colors.fontGray2};
      }
    }
  }
`;

export default SignupTos;

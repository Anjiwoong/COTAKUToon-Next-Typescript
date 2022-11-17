import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';
import { checkProps } from '../../types/signup-props';
import SignupTosItem from './SignupTosItem';

const tosItem = [
  {
    id: 'signup-chk2',
    title: '이용약관 동의(필수)',
    option: '약관 보기',
    essential: true,
  },
  { id: 'signup-chk3', title: '이벤트, 혜택 알림 수신동의(선택)', option: '' },
  {
    id: 'signup-chk4',
    title: '성별, 생년 정보 제공 동의(선택)',
    option: '내용 확인',
  },
  {
    id: 'signup-chk5',
    title: '개인 정보 수집 및 이용 동의(필수)',
    option: '내용 확인',
    essential: true,
  },
];

const SignupTos = (props: checkProps) => {
  const [allCheck, setAllCheck] = useState(false);
  const [essentialCheck, setEssentialCheck] = useState({
    'signup-chk2': false,
    'signup-chk5': false,
  });

  const allCheckHandler = () => setAllCheck(prev => !prev);

  const essentialCheckHandler = (check: boolean, inputName: string) => {
    setEssentialCheck(prev => ({ ...prev, [inputName]: check }));
  };

  const { checkHandler } = props;

  useEffect(() => {
    const isEssentialCheck = Object.values(essentialCheck).every(
      check => check === true
    );

    checkHandler(isEssentialCheck, 'tos');
  }, [essentialCheck]);

  return (
    <Tos>
      <AllAgree>
        <Input
          type="checkbox"
          name="tosCheck"
          id="signup-chk1"
          onChange={allCheckHandler}
          checked={allCheck}
        />
        <label htmlFor="signup-chk1">
          <span></span>
          <span>선택 포함 전체 약관 동의</span>
        </label>
      </AllAgree>
      <ul>
        {tosItem.map(tos => (
          <SignupTosItem
            key={tos.id}
            id={tos.id}
            title={tos.title}
            option={tos.option}
            allCheck={allCheck}
            essential={tos.essential}
            essentialCheckHandler={essentialCheckHandler}
          />
        ))}
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

export default SignupTos;

import styled from 'styled-components';
import Input from '../UI/Input';

const CustomCheckbox = () => {
  return (
    <>
      <CustomInput type="checkbox" />
      <CheckBox></CheckBox>
    </>
  );
};

const CustomInput = styled(Input)`
  display: none;

  &:checked + span {
    border-color: ${({ theme }) => theme.colors.borderBlue1};
    background: ${({ theme }) => theme.colors.blue};

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 2px;
      display: block;
      width: 6px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      transform: rotate(45deg);
    }

    &::after {
      content: '';
      position: absolute;
      top: 6px;
      right: 0;
      display: block;
      width: 12px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      transform: rotate(-45deg);
    }
  }
`;

const CheckBox = styled.span`
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 2px;
  transition: background-color 0.2s, border-color 0.2s;
  margin-top: 2px;
  margin-right: 8px;
`;

export default CustomCheckbox;

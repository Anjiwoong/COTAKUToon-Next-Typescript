import styled from 'styled-components';
import { cautionProps } from './ridi-cash-props';

const MyRidiCashCautionItem = (props: cautionProps) => {
  return <CautionList>{props.content}</CautionList>;
};

const CautionList = styled.li`
  position: relative;
  padding: 3px 8px;
  color: ${({ theme }) => theme.colors.fontGray2};
  font-weight: 400;
  font-size: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.fontGray2};
    margin-right: 4px;
  }
`;

export default MyRidiCashCautionItem;

import styled from 'styled-components';
import Button from '../../UI/Button';
import { BiSortAlt2 } from 'react-icons/bi';
import Input from '../../UI/Input';
import { FaShoppingCart } from 'react-icons/fa';
import CustomCheckbox from '../../Layout/CustomCheckbox';

const WebtoonSeriesOption = () => {
  return (
    <ListOption>
      <ListOptionLeft>
        <label>
          <CustomCheckbox />
          전체 선택
        </label>
        <AlignmentButton>
          <BiSortAlt2 />
          신간부터
        </AlignmentButton>
      </ListOptionLeft>
      <ListOptionRight>
        <InfoVolume>
          총 <span>0</span>화
        </InfoVolume>
        <PriceInfo>
          <span>0</span>원
        </PriceInfo>
        <CartButton>
          <FaShoppingCart />
          카트
        </CartButton>
        <RentalButton>선택 대여</RentalButton>
      </ListOptionRight>
    </ListOption>
  );
};

const ListOption = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  margin-top: 51px;
  padding: 10px 20px 10px 10px;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.gray};
`;

const ListOptionLeft = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};

  label {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontGray7};
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
    letter-spacing: -0.3px;
  }
`;

const AlignmentButton = styled(Button)`
  padding: 6px 12px;
  background: $white;
  color: ${({ theme }) => theme.colors.fontGray7};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
  font-size: 12px;
  border-radius: 4px;
  font-weight: 700;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: $border-gray2;
  }

  svg {
    transform: translate(-2px, 2px);
    font-size: 14px;
  }
`;

const ListOptionRight = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const InfoVolume = styled.span`
  color: ${({ theme }) => theme.colors.secondaryFont};

  span {
    color: ${({ theme }) => theme.colors.secondaryFont};
  }
`;

const PriceInfo = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  margin-left: 3px;
  margin-right: 3px;
`;

const CartButton = styled(Button)`
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.fontGray2};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-right: 3px;

  &:hover {
    background: ${({ theme }) => theme.colors.borderGray2};
  }

  svg {
    font-size: 12px;
    margin-right: 4px;
  }
`;

const RentalButton = styled(Button)`
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
  box-shadow: 0 1px 1px 0 rgb(209 213 217 / 30%);
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
  font-weight: 700;
  letter-spacing: -0.3px;

  &:hover {
    background: ${({ theme }) => theme.colors.borderBlue1};
  }
`;

export default WebtoonSeriesOption;

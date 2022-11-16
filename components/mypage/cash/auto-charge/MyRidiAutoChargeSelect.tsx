import styled from 'styled-components';
import Input from '../../../UI/Input';
import MyRidiAutoChargeSelectItem from './MyRidiAutoChargeSelectItem';

const selectList = [
  { id: 'list1', price: 2000, savingRate: 3, savingPoint: 60 },
  { id: 'list2', price: 5000, savingRate: 3, savingPoint: 150 },
  { id: 'list3', price: 10000, savingRate: 3, savingPoint: 300 },
  { id: 'list4', price: 20000, savingRate: 3, savingPoint: 600 },
  { id: 'list5', price: 30000, savingRate: 4, savingPoint: 1200 },
  { id: 'list6', price: 50000, savingRate: 4, savingPoint: 2000 },
  { id: 'list7', price: 70000, savingRate: 4, savingPoint: 2800 },
  { id: 'list8', price: 100000, savingRate: 5, savingPoint: 5000 },
  {
    id: 'list9',
    price: 200000,
    savingRate: 5,
    savingPoint: 10000,
  },
  {
    id: 'list10',
    price: 300000,
    savingRate: 5,
    savingPoint: 15000,
  },
];

const MyRidiAutoChargeSelect = () => {
  return (
    <SelectArticle>
      <SelectHead>
        <span>리디캐시 충전</span>
        <span>
          적립률
          <span></span>
        </span>
        <span>리디포인트 적립</span>
      </SelectHead>
      <SelectList>
        {selectList.map(select => (
          <MyRidiAutoChargeSelectItem
            key={select.id}
            id={select.id}
            price={select.price}
            savingRate={select.savingRate}
            savingPoint={select.savingPoint}
          />
        ))}
      </SelectList>
    </SelectArticle>
  );
};

const SelectArticle = styled.article`
  border-top: 2px solid ${({ theme }) => theme.colors.gray2};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
`;

const SelectHead = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  ${({ theme }) => theme.mixins.paddingY('12px')};

  text-align: right;
  font-size: 14px;
  font-weight: 600;

  span {
    flex-grow: 1;

    &:nth-child(3) {
      flex-grow: 1.2;
      margin-right: 15px;
    }

    span {
      position: relative;
      margin-left: 5px;
      color: ${({ theme }) => theme.colors.white};

      &::before {
        content: 'x2';
        position: absolute;
        ${({ theme }) => theme.mixins.flexCenter()};
        font-size: 14px;
        background: ${({ theme }) => theme.colors.ridiYellow2};
        width: 25px;
        height: 25px;
        border-radius: 50%;
        top: -4px;
        right: -25px;
      }
    }
  }
`;

const SelectList = styled.ul`
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};

  hr {
    border: 0;
    height: 0.5px;
    background: ${({ theme }) => theme.colors.gray2};
  }
`;

export default MyRidiAutoChargeSelect;

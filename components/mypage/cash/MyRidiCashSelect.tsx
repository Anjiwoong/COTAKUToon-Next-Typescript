import styled from 'styled-components';

import MyRidiCashSelectItem from './MyRidiCashSelectItem';

const selectList = [
  { id: 'list1', price: 2000, savingRate: 3, savingPoint: 60 },
  { id: 'list2', price: 5000, savingRate: 3, savingPoint: 150 },
  { id: 'list3', price: 10000, savingRate: 3, savingPoint: 300 },
  { id: 'list4', price: 20000, savingRate: 3, savingPoint: 600 },
  { id: 'list5', price: 30000, savingRate: 4, savingPoint: 1200 },
  { id: 'list6', price: 50000, savingRate: 4, savingPoint: 2000 },
  { id: 'list7', price: 70000, savingRate: 4, savingPoint: 2800 },
  { id: 'list8', price: 100000, savingRate: 5, savingPoint: 5000 },
  { id: 'list9', price: 200000, savingRate: 5, savingPoint: 10000 },
  { id: 'list10', price: 300000, savingRate: 5, savingPoint: 15000 },
  { id: 'list11', price: 400000, savingRate: 5, savingPoint: 20000 },
  { id: 'list12', price: 500000, savingRate: 5, savingPoint: 25000 },
];

const MyRidiCashSelect = () => {
  return (
    <SelectArticle>
      <A11yHidden>리디캐시 충전금액 선택란</A11yHidden>
      <SelectHead>
        <span>리디캐시 충전</span>
        <span>적립률</span>
        <span>리디포인트 적립</span>
      </SelectHead>
      <SelectList>
        {selectList.map(list => (
          <MyRidiCashSelectItem
            key={list.id}
            id={list.id}
            price={list.price}
            savingRate={list.savingRate}
            savingPoint={list.savingPoint}
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

const A11yHidden = styled.h4`
  ${({ theme }) => theme.mixins.a11yHidden()};
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

export default MyRidiCashSelect;

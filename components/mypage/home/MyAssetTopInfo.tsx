import styled from 'styled-components';
import MyAssetInfoItem from './MyAssetInfoItem';

const assetInfo = [
  { title: '리디캐시', amount: 0, extraInfo: '충전 내역', arrow: true },
  { title: '리디포인트', amount: 0, extraInfo: '소멸 예정', arrow: false },
  { title: '쿠폰', amount: 11, extraInfo: '소멸 예정', arrow: true },
];

const MyAssetTopInfo = () => {
  return (
    <TopInfoList>
      {assetInfo.map(info => (
        <MyAssetInfoItem
          key={info.title}
          title={info.title}
          amount={info.amount}
          extraInfo={info.extraInfo}
          arrow={info.arrow}
        />
      ))}
    </TopInfoList>
  );
};

const TopInfoList = styled.ul`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export default MyAssetTopInfo;

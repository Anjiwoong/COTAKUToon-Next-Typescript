import styled from 'styled-components';

import MyAssetInfoItem from './MyAssetInfoItem';

const assetInfo = [
  { title: '내 서재', amount: 1 },
  { title: '카트', amount: 0 },
  { title: '위시리스트', amount: 0 },
];

const MyAssetDownInfo = () => {
  return (
    <DownInfoList>
      {assetInfo.map(info => (
        <MyAssetInfoItem
          key={info.title}
          title={info.title}
          amount={info.amount}
        />
      ))}
    </DownInfoList>
  );
};

const DownInfoList = styled.ul`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export default MyAssetDownInfo;

import styled from 'styled-components';

import MyAccountInfo from './MyAccountInfo';
import MyAssetInfo from './MyAssetInfo';

const MyPageInfo = () => {
  return (
    <InfoWrapper>
      <MyAccountInfo />
      <MyAssetInfo />
    </InfoWrapper>
  );
};

const InfoWrapper = styled.article`
  ${({ theme }) => theme.mixins.flexBox()};
  width: 100%;
  max-width: 717px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  width: 100%;
`;

export default MyPageInfo;

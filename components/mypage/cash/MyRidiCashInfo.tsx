import styled from 'styled-components';

import MyRidiCashInfoImage from './MyRidiCashInfoImage';
import MyRidiCashInfoText from './MyRidiCashInfoText';

const MyRidiCashInfo = () => {
  return (
    <InfoWrapper>
      <MyRidiCashInfoText />
      <MyRidiCashInfoImage />
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  padding: 42px 0 30px 0;
  width: 740px;
`;

export default MyRidiCashInfo;

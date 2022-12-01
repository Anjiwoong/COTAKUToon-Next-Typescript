import styled from 'styled-components';
import CompanyInfo from './CompanyInfo';
import Etc from './Etc';
import Service from './Service';

const CustomerInfo = () => {
  return (
    <Wrapper>
      <Service />
      <EtcCompany>
        <Etc />
        <CompanyInfo />
      </EtcCompany>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  flex: 1;
`;

const EtcCompany = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  flex: 2;

  ${({ theme }) => theme.media.mobile`
    flex: 1;
    flex-direction: column;
  `}
`;

export default CustomerInfo;

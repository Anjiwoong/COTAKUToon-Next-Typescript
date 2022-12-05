import styled from 'styled-components';

import NoticeList from './NoticeList';
import CustomerInfo from './CustomerInfo';
import Business from './Business';
import FooterIcon from './FooterIcon';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrap>
          <Customer>
            <NoticeList />
            <CustomerInfo />
          </Customer>
          <BusinessInfo>
            <Business />
          </BusinessInfo>
        </FooterWrap>
        <FooterIcon />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 60px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray2};
`;

const Container = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'stretch', 'wrap')};
  ${({ theme }) => theme.mixins.autoMargin()};

  max-width: 1170px;
  padding: 41px 26px 20px;
  min-width: 340px;

  ${({ theme }) => theme.media.mobile`
    padding: 30px 12px 50px;
    flex-direction: column;
  `}
`;

const FooterWrap = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  padding: 0 4px;
  flex: 1;
`;

const Customer = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `}
`;

const BusinessInfo = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile`
    margin-top: 55px;
  `}
`;

export default Footer;

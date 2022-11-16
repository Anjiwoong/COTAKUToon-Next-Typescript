import styled from 'styled-components';
import ViewerFooterBottomNav from './ViewerFooterBottomNav';
import ViewerFooterTopNav from './ViewerFooterTopNav';

const ViewerFooterNav = () => {
  return (
    <FooterNav>
      {/* <ViewerFooterTopNav /> */}
      <ViewerFooterBottomNav />
    </FooterNav>
  );
};

const FooterNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => theme.colors.bgNavDark};
  font-size: 13px;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease;
`;

export default ViewerFooterNav;

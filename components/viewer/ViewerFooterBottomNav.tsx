import styled from 'styled-components';
import ViewerFooterNavBar from './ViewerFooterNavBar';
import ViewerFooterSetting from './ViewerFooterSetting';

const ViewerFooterBottomNav = () => {
  return (
    <BottomWrapper>
      <ViewerFooterNavBar />
      <ViewerFooterSetting />
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.borderNavDark};
  position: relative;
`;

export default ViewerFooterBottomNav;

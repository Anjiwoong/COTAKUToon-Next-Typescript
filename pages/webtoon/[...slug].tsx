import styled from 'styled-components';
import ViewerFooterNav from '../../components/viewer/ViewerFooterNav';
import ViewerHeader from '../../components/viewer/ViewerHeader';
import ViewerImage from '../../components/viewer/ViewerImage';

const WebtoonPage = () => {
  return (
    <ViewerWrapper>
      <ViewerHeader />
      <ViewerImage />
      <ViewerFooterNav />
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray7};
`;

export default WebtoonPage;

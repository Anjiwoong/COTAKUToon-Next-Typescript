import styled from 'styled-components';
import ViewerHeaderIcon from './ViewerHeaderIcon';
import ViewerHeaderTitle from './ViewerHeaderTitle';

const ViewerHeader = () => {
  return (
    <Header>
      <Inner>
        <ViewerHeaderTitle />
        <ViewerHeaderIcon />
      </Inner>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.colors.bgNavDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderNavDark};
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease;
`;

const Inner = styled.div`
  ${({ theme }) => theme.mixins.autoMargin()};
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'space-between', 'center', 'nowrap')};
  ${({ theme }) => theme.mixins.paddingX('12px')};
  max-width: 700px;
  height: 50px;
`;

export default ViewerHeader;

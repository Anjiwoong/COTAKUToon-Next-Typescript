import styled from 'styled-components';
import ServiceList from './ServiceList';

const Service = () => {
  return (
    <Wrapper>
      <ServiceTitle>서비스</ServiceTitle>
      <ServiceList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  flex: 1;
  max-width: 185px;

  ${({ theme }) => theme.media.mobile`
    max-width: inherit;
  `}
`;

const ServiceTitle = styled.h4`
  color: ${({ theme }) => theme.colors.fontGray1};
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.3px;
  padding: 4px 0;
  margin-bottom: 12px;

  ${({ theme }) => theme.media.mobile`
    padding: 0;
    margin-bottom: 16px;
    font-size: 12px;
    line-height: 14px;
  `}
`;

export default Service;

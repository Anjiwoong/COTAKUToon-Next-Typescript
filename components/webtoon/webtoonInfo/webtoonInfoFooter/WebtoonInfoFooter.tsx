import styled from 'styled-components';
import WebtoonFooterMetadata from './WebtoonFooterMetadata';
import WebtoonFooterSupport from './WebtoonFooterSupport';

const WebtoonInfoFooter = () => {
  return (
    <FooterWrapper>
      <WebtoonFooterMetadata />
      <WebtoonFooterSupport />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  margin-top: 40px;
  padding: 16px 26px;
  border: solid 4px ${({ theme }) => theme.colors.gray3};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  letter-spacing: 1px;
`;

export default WebtoonInfoFooter;

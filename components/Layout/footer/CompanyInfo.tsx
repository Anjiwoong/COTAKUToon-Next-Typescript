import styled from 'styled-components';
import CompanyInfoList from './CompanyInfoList';

const CompanyInfo = () => {
  return (
    <Wrapper>
      <h4>회사</h4>
      <CompanyInfoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('column', 'flex-start', 'stretch', 'nowrap')};
  flex: 1;
  max-width: 185px;

  ${({ theme }) => theme.media.mobile`
    max-width: initial;
    margin-top: 30px;
  `}

  h4 {
    ${({ theme }) => theme.mixins.paddingY('4px')};
    color: ${({ theme }) => theme.colors.fontGray1};
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.01em;
    margin-bottom: 12px;

    ${({ theme }) => theme.media.mobile`
      padding: 0;
      margin-bottom: 16px;
      font-size: 12px;
      line-height: 14px;
    `}
  }
`;

export default CompanyInfo;

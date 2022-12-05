import styled from 'styled-components';

import EtcList from './EtcList';

const Etc = () => {
  return (
    <Wrapper>
      <h4>기타 문의</h4>
      <EtcList />
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

export default Etc;

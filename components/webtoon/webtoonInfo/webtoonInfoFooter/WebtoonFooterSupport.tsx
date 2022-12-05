import styled from 'styled-components';

import { IoVolumeMute } from 'react-icons/io5';
import { AiFillApple } from 'react-icons/ai';
import { AiFillAndroid } from 'react-icons/ai';

const WebtoonFooterSupport = () => {
  return (
    <SupportWrapper>
      <SupportInfo>
        <InfoTitle> 듣기 기능</InfoTitle>
        <span>
          <IoVolumeMute /> 미지원
        </span>
      </SupportInfo>
      <SupportInfo>
        <InfoTitle>지원 기기</InfoTitle>
        <span>
          <AiFillApple />
          iOS <AiFillAndroid />
          Android
        </span>
      </SupportInfo>
    </SupportWrapper>
  );
};

const SupportWrapper = styled.div`
  margin-left: 100px;
`;

const SupportInfo = styled.div`
  margin: 4px 0;
`;

const InfoTitle = styled.span`
  display: inline-block;
  min-width: 70px;
  max-width: 70px;
  padding-right: 8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray6};
`;

export default WebtoonFooterSupport;

import styled from 'styled-components';

const WebtoonFooterMetadata = () => {
  return (
    <div>
      <MetadataInfo>
        <InfoTitle>출간 정보</InfoTitle>
        <span>2020.07.31. 출간</span>
      </MetadataInfo>
      <MetadataInfo>
        <InfoTitle>파일 정보</InfoTitle>
        <span>평균 24.1MB</span>
      </MetadataInfo>
      <MetadataInfo>
        <InfoTitle>ISBN</InfoTitle>
        <span>9791197025686</span>
      </MetadataInfo>
    </div>
  );
};

const MetadataInfo = styled.div`
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

export default WebtoonFooterMetadata;

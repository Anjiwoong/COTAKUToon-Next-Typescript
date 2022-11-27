import styled from 'styled-components';

const WebtoonMetadata = ({ author }: { author?: string }) => {
  const _author = author?.split(',');

  return (
    <Wrapper>
      <WriterInfo>
        <span>
          <Bold>{_author !== undefined && _author[0]}</Bold> 글
        </span>
        <span>
          <Bold>
            {_author !== undefined && _author[1] ? _author[1] : _author}
          </Bold>
          그림
        </span>
        <span>
          <Bold>비첸치</Bold> 원작
        </span>
      </WriterInfo>
      <div>
        <span>
          <Bold>오렌지디</Bold> 출판
        </span>
      </div>
      <SeriesInfo>
        <span>총 99화</span>
        <span>미완결</span>
      </SeriesInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  line-height: 20px;
`;

const WriterInfo = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};

  span {
    &:nth-child(2) {
      &::before {
        ${({ theme }) => theme.mixins.marginX('6px')};
        content: '';
        display: inline-block;
        width: 1px;
        height: 11px;
        background-color: ${({ theme }) => theme.colors.gray2};
      }

      &::after {
        ${({ theme }) => theme.mixins.marginX('6px')};
        content: '';
        display: inline-block;
        width: 1px;
        height: 11px;
        background-color: ${({ theme }) => theme.colors.gray2};
      }
    }
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;

const SeriesInfo = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row', 'flex-start', 'center', 'nowrap')};

  span {
    &:nth-child(1) {
      letter-spacing: -0.3px;

      &::after {
        ${({ theme }) => theme.mixins.marginX('6px')};
        content: '';
        display: inline-block;
        width: 1px;
        height: 11px;
        background-color: ${({ theme }) => theme.colors.gray2};
      }
    }
  }
`;

export default WebtoonMetadata;

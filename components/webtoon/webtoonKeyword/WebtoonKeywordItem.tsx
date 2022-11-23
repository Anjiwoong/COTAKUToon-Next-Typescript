import styled from 'styled-components';

const WebtoonKeywordItem = ({ keyword }: { keyword: string }) => {
  return (
    <KeywordItem>
      <button>{keyword}</button>
    </KeywordItem>
  );
};

const KeywordItem = styled.li`
  button {
    ${({ theme }) => theme.mixins.paddingX('10px')};

    white-space: nowrap;
    margin: 0 10px 15px 0;
    height: 30px;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.gray3};
    border: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondaryFont};

    &:hover {
      background: ${({ theme }) => theme.colors.borderGray3};
    }
  }
`;

export default WebtoonKeywordItem;

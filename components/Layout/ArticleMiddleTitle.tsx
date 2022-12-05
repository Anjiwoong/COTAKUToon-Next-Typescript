import styled from 'styled-components';

const ArticleMiddleTitle = ({ children }: { children: string }) => {
  return <MiddleTitle>{children}</MiddleTitle>;
};

const MiddleTitle = styled.h3`
  display: block;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fontGray6};
  font-weight: 700;
  letter-spacing: -0.6px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderGray7};
`;

export default ArticleMiddleTitle;

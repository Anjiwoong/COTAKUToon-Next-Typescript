import Link from 'next/link';
import styled from 'styled-components';
import Button from '../../../UI/Button';

const FirstEpisodeButton = () => {
  return (
    <Link href="/webtoon/1">
      <EpisodeButton type="button">첫회보기</EpisodeButton>
    </Link>
  );
};

const EpisodeButton = styled(Button)`
  width: 180px;
  font-size: 15px;
  border: 0;
  outline: 0;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 700;
  line-height: 1em;
  transition: background 0.2s, color 0.2s;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.borderBlue1};
  font-size: 16px;
  padding: 16px 34px;
  margin-top: 20px;

  &:hover {
    background: ${({ theme }) => theme.colors.borderBlue1};
  }
`;

export default FirstEpisodeButton;

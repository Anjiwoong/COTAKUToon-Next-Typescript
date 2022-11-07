import styled from 'styled-components';
import Button from '../../UI/Button';
import WebtoonSeriesItem from './WebtoonSeriesItem';
import { GoTriangleDown } from 'react-icons/go';

const WebtoonSeriesList = () => {
  return (
    <>
      <ul>
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
        <WebtoonSeriesItem />
      </ul>
      <ViewAllButton>
        더보기
        <GoTriangleDown />
      </ViewAllButton>
    </>
  );
};

const ViewAllButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  font-size: 13px;
  padding: 10px;
  border-width: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s;
  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontGray2};

  svg {
    font-size: 14px;
    margin-left: 4px;
    transform: translateY(2px);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderGray2};
  }
`;

export default WebtoonSeriesList;

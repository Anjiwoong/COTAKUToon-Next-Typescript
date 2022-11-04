import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const StarRating = () => {
  return (
    <>
      <Star>
        <AiFillStar /> 4.9
      </Star>{' '}
      <Rating>(30,334)</Rating>
    </>
  );
};

const Star = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;

  svg {
    transform: translateY(1px);
  }
`;

const Rating = styled.span`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
`;

export default StarRating;

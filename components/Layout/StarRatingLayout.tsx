import styled from 'styled-components';

import { RateTypes } from '../../types/layout/star-rating-types';

import { AiFillStar } from 'react-icons/ai';

const StarRatingLayout = (props: RateTypes) => {
  return (
    <>
      <Star>
        <AiFillStar /> {props.rating}
      </Star>
      <Rating>({props.views})</Rating>
    </>
  );
};

const Star = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
  margin-right: 5px;

  svg {
    transform: translateY(1px);
  }
`;

const Rating = styled.span`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-size: 14px;
`;

export default StarRatingLayout;

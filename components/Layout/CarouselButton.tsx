import Button from '../UI/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { CarouselButtonTypes } from '../../types/layout/carousel-button-types';

const CarouselNextButton = ({
  prevHandler,
  nextHandler,
}: CarouselButtonTypes) => {
  return (
    <>
      <Button prev onClick={prevHandler}>
        <IoIosArrowBack />
      </Button>
      <Button next onClick={nextHandler}>
        <IoIosArrowForward />
      </Button>
    </>
  );
};

export default CarouselNextButton;

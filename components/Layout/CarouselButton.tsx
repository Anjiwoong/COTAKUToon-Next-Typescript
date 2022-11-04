import Button from '../UI/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CarouselButton = () => {
  return (
    <div>
      <Button prev>
        <IoIosArrowBack />
      </Button>
      <Button next>
        <IoIosArrowForward />
      </Button>
    </div>
  );
};

export default CarouselButton;

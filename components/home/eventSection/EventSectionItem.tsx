import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { EventSectionTypes } from '../../../types/event-section-types';

const EventSectionItem = ({ title, cover }: EventSectionTypes) => {
  return (
    <CarouseItem>
      <Link href="#">
        <p>
          {title[0]}
          <br />
          {title[1]}
        </p>
        <Image src={cover} alt="event-image" width={200} height={90} priority />
      </Link>
    </CarouseItem>
  );
};

const CarouseItem = styled.li`
  border-radius: 5px;
  margin: 0 2px;

  ${({ theme }) => theme.media.mobile`
    margin: 0 2px;
  `}

  a {
    ${({ theme }) =>
      theme.mixins.flexBox('row', 'flex-end', 'center', 'nowrap')};
    position: relative;
  }

  p {
    position: absolute;
    left: 0;
    margin-left: 24px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default EventSectionItem;

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
        <Image src={cover} alt="event-image" width={200} height={90} />
      </Link>
    </CarouseItem>
  );
};

const CarouseItem = styled.li`
  border-radius: 5px;
  width: calc(33.33% - 7px);
  flex-shrink: 0;
  margin: 0 3.5px;

  :nth-child(1) {
    background: ${({ theme }) => theme.colors.eventSwitch};
  }

  :nth-child(2) {
    background: ${({ theme }) => theme.colors.eventUp};
  }

  :nth-child(3) {
    background: ${({ theme }) => theme.colors.eventEarly};
  }

  :last-child {
    background: ${({ theme }) => theme.colors.eventCash};
  }

  ${({ theme }) => theme.media.tablet`
    width: calc(50% - 7px);
  `}

  ${({ theme }) => theme.media.mobile`
    width: calc(100% - 7px);
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

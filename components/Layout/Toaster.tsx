import React from 'react';
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { ToasterTypes } from '../../types/toaster-types';

const Toaster = (props: ToasterTypes) => {
  return (
    <ToasterWrapper>
      <AiFillCheckCircle />
      <ToasterText>{props.text}</ToasterText>
      <AiOutlineClose onClick={props.closeHandler} />
    </ToasterWrapper>
  );
};

const ToasterWrapper = styled.div`
  ${({ theme }) =>
    theme.mixins.flexBox('row,', 'space-between', 'center', 'nowrap')};
  position: fixed;
  top: 0;
  left: 50%;
  width: 400px;
  padding: 6px 6px 6px 26px;
  color: ${({ theme }) => theme.colors.fontGreen};
  background-color: ${({ theme }) => theme.colors.bgToaster};
  transform: translate3d(-50%, 0, 0);
  border-radius: 5px;
  animation: toast 2s ease forwards;
  opacity: 0;
  z-index: 1000;

  svg {
    &:nth-child(1) {
      margin-top: 1px;
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.secondaryFont};
      font-size: 30px;
      margin-top: 1px;
      cursor: pointer;
    }
  }

  @keyframes toast {
    0% {
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }

    20%,
    50%,
    80% {
      opacity: 1;
      transform: translate3d(-50%, 220%, 0);
    }

    100% {
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

const ToasterText = styled.span`
  width: 310px;
`;

export default Toaster;

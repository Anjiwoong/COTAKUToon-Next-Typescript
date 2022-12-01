import { MouseEvent } from 'react';

export interface ButtonProps {
  children: string | any;
  type?: 'button' | 'submit';
  login?: boolean;
  signup?: boolean;
  gender?: boolean;
  submit?: boolean;
  disabled?: boolean;
  prev?: boolean;
  next?: boolean;
  selected?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

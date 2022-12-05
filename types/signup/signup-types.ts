import { ChangeEvent, Ref } from 'react';

export interface SignupInputTypes {
  margin?: boolean;
  pwd?: boolean;
  check?: boolean;
}

export interface ValidInputTypes {
  text?: boolean;
  valid?: boolean;
}

export interface TosItemTypes {
  id: string;
  title: string;
  option: string;
  allCheck: boolean;
  essential?: boolean;
  essentialCheckHandler: (check: boolean, inputName: string) => void;
}

export interface CheckTypes {
  checkHandler: (check: boolean, inputName: string) => void;
  inputRef?: Ref<HTMLInputElement>;
}

export interface CheckStateTypes {
  id: boolean;
  password: boolean;
  email: boolean;
  name: boolean;
  birth: boolean;
  tos: boolean;
}

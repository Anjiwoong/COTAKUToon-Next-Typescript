import { ChangeEvent } from 'react';

export interface StyleProps {
  margin?: boolean;
  pwd?: boolean;
  check?: boolean;
}

export interface useInputType {
  value?: string | undefined;
  isValid?: boolean | void;
  hasError?: boolean;
  valueChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler?: () => void;
  reset?: () => void;
}

export interface validInputProps {
  text?: boolean;
  valid?: boolean;
}

export interface GenderButton {
  selected: boolean;
  onClick: () => void;
}

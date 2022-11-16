import { ChangeEvent, Ref } from 'react';

export interface InputProps {
  type: string;
  id?: string;
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  login?: boolean;
  password?: boolean;
  box?: boolean;
  value?: string;
  checked?: boolean;
  radio?: boolean;
  defaultChecked?: boolean;
  ref?: Ref<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

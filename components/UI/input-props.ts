import { ChangeEvent } from 'react';

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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

import { Ref } from 'react';

export interface loginProps {
  idRef?: Ref<HTMLInputElement>;
  passwordRef?: Ref<HTMLInputElement>;
}

export interface loadingProps {
  loading?: boolean;
  $loading?: boolean;
}

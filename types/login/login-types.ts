import { Ref } from 'react';

export interface loginProps {
  idRef?: Ref<HTMLInputElement>;
  passwordRef?: Ref<HTMLInputElement>;
}

export interface LoadingTypes {
  loading?: boolean;
  $loading?: boolean;
}

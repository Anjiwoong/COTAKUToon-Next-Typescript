import { MouseEvent } from 'react';

export const notImplementedHandler = (
  e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  alert('미구현 상태입니다.');
};

import { ChangeEvent, useReducer } from 'react';

interface Action {
  type: string;
  value?: string;
}

interface stateProps {
  value?: string;
  isTouched: boolean;
}

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: stateProps, action: Action): any => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }

  return inputStateReducer;
};

const useInput = (validateValue: (value?: string) => void | boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: 'INPUT', value: e.target.value });

  return {
    value: inputState.value,
    isValid: valueIsValid,
    valueChangeHandler,
  };
};

export default useInput;

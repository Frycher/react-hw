import { actionTypes } from './actionTypes';
export const initialState = {
  currentStep: 1,
  name: '',
  surname: '',
  email: '',
  city: '',
  street: '',
  house: '',
  avatar: '',
  password: '',
  confirmPassword: '',
  isNotification: false,
  message: '',
};

export const reducer = (state, action) => {
  const { currentStep } = state;
  const { type, payload } = action;
  const { NEXT_STEP, PREVIOUS_STEP, SET_DATA_VALUE } = actionTypes;
  switch (type) {
    case NEXT_STEP:
      return {
        ...state,
        currentStep: currentStep + 1,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        currentStep: currentStep - 1,
      };
    case SET_DATA_VALUE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

import { actionTypes } from './actionTypes';

export const initState = {
  particiantList: JSON.parse(localStorage.getItem('particiantList')) || [],
  testarr: [],
  isNotification: false,
  newPatriciant: {},
  message: '',
  isTimer: false,
  totalParticiant: 0,
  particiantWinner: '',
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  const {
    ADD_PARTICIANT,
    ADD_NEW_PARTICIANT,
    SET_IS_SHOW_TIMER,
    SET_IS_SHOW_NOTIFICATION,
    SET_MESSAGE,
    REMOVE_PARTICIANT,
    SHOW_WINNER,
    SEARCH_PARTICIANT,
  } = actionTypes;

  switch (type) {
    case ADD_PARTICIANT:

      return {
        ...state,
        particiantList: [payload, ...state.particiantList],
        testarr: [payload, ...state.testarr],
        totalParticiant: state.totalParticiant + 1,
        particiantWinner: (state.particiantWinner = ''),
      };
    case ADD_NEW_PARTICIANT:
      return {
        ...state,
        newPatriciant: payload,
      };
    case REMOVE_PARTICIANT:
      const newList = state.testarr.filter(item => item.id !== payload.id);
      return {
        ...state,
        testarr: newList,
        totalParticiant: state.totalParticiant - 1,
      };
    case SHOW_WINNER:
      const winnerList = [...state.testarr].sort((a, b) => a.time.counter - b.time.counter);
      return {
        ...state,
        particiantWinner: winnerList[0],
      };
    case SET_IS_SHOW_TIMER:
      return {
        ...state,
        isTimer: !state.isTimer,
      };
    case SEARCH_PARTICIANT:
      let searchedList = state.testarr.filter((item) => item.id.includes(payload) || item.name.includes(payload));
      return {
        ...state,
        testarr: payload ? searchedList : state.particiantList,
      };
    case SET_IS_SHOW_NOTIFICATION:
      return {
        ...state,
        isNotification: payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
};

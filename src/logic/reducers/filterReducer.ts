// Types
import {
  UPDATE_FILTERS,
  INIT_FILTERS,
  RESET_FILTERS,
  FilterActions,
  FilterState,
  All,
} from '../../types';

const initState: FilterState = {
  cards: {
    original: [],
    list: [],
  },
  all: {
    expansions: [],
    classes: [],
    types: [],
  },
  currents: {
    expansion: All,
    classe: All,
    type: All,
  },
};

const filterReducer = (state = initState, action: FilterActions) => {
  switch (action.type) {
    case INIT_FILTERS:
      const { all, currents, cards } = action.payload;
      const { original, list } = cards;
      return {
        ...state,
        all,
        currents,
        cards: {
          original,
          list,
        },
      };

    case UPDATE_FILTERS:
      const { prop, value } = action.payload;

      return {
        ...state,
        currents: {
          ...state.currents,
          [prop]: value,
        },
      };

    case RESET_FILTERS:
      return {
        ...state,
        currents: {
          ...state.currents,
          classe: action.payload,
          type: action.payload,
        },
      };

    default:
      return { ...state };
  }
};

export default filterReducer;

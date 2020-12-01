// Types
import { FETCH_INFOS, FETCH_CARDS, LOADING, FetchActions, InfosState } from '../../types';

const initState: InfosState = {
  base: {
    classes: [],
    sets: [],
    standard: [],
    wild: [],
    types: [],
    factions: [],
    qualities: [],
    races: [],
    locales: {},
  },
  cards: {},
  isLoading: true,
};

const infosReducer = (state = initState, action: FetchActions) => {
  switch (action.type) {
    case FETCH_INFOS:
      const { base, cards } = action.payload;
      return {
        ...state,
        base,
        cards,
        isLoading: false,
      };

    case FETCH_CARDS:
      return {
        ...state,
        cards: action.payload,
        isLoading: false,
      };

    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default infosReducer;

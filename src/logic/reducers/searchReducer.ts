// Types
import { SEARCH_CARD, SearchCardAction, SearchState } from '../../types';

const initState: SearchState = {
  value: '',
};

const infosReducer = (state = initState, action: SearchCardAction) => {
  switch (action.type) {
    case SEARCH_CARD:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return { ...state };
  }
};

export default infosReducer;

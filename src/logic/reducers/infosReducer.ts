// Types
import { FETCH_INFOS, LOADING, InfosAction } from '../../types';

const initState = {
  isLoading: true,
};

const infosReducer = (state = initState, action: InfosAction) => {
  switch (action.type) {
    case FETCH_INFOS:
      return {
        ...action.payload,
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

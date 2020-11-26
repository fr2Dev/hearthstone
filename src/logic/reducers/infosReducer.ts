// Types
import { FETCH_INFOS, FetchInfosAction } from '../../types';

const initState = {
  infos: {},
};

const infosReducer = (state = initState, action: FetchInfosAction) => {
  switch (action.type) {
    case FETCH_INFOS:
      return {
        ...state,
        infos: action.payload.infos,
      };

    default:
      return { ...state };
  }
};

export default infosReducer;

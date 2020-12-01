// Libraries
import { Dispatch } from 'redux';
// Types
import { SEARCH_CARD } from '../../types';

export const searchCard = (value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SEARCH_CARD,
    payload: value,
  });
};

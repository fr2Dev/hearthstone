// Libraries
import { Dispatch } from 'redux';
// Types
import {
  INIT_FILTERS,
  UPDATE_FILTERS,
  RESET_FILTERS,
  CardObject,
  InfosBase,
  All,
} from '../../types';
// Logic
import { useFilters } from '../hooks';

export const initFilters = (cards: CardObject, base: InfosBase) => (dispatch: Dispatch) => {
  const { allFilters, currentFilters, cardsListOriginal, cardsList } = useFilters(cards, base);

  dispatch({
    type: INIT_FILTERS,
    payload: {
      cards: { original: cardsListOriginal, list: cardsList },
      all: allFilters,
      currents: currentFilters,
    },
  });
};

export const updateFilters = (e: React.ChangeEvent<HTMLSelectElement>) => (prop: string) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: UPDATE_FILTERS,
    payload: { prop, value: e.target.value },
  });
};

export const resetFilters = () => (dispatch: Dispatch) => {
  dispatch({
    type: RESET_FILTERS,
    payload: All,
  });
};

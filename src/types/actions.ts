import { InfosBase, Card, AllFilters, CurrentFilters } from './';
export const FETCH_INFOS = 'FETCH_INFOS';
export const FETCH_CARDS = 'FETCH_CARDS';
export const SEARCH_CARD = 'SEARCH_CARD';
export const INIT_FILTERS = 'INIT_FILTERS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';
export const LOADING = 'LOADING';

export interface FetchInfosAction {
  type: typeof FETCH_INFOS;
  payload: {
    base: InfosBase;
    cards: {};
  };
}

export interface FetchCardsAction {
  type: typeof FETCH_CARDS;
  payload: {};
}

export interface SearchCardAction {
  type: typeof SEARCH_CARD;
  payload: {};
}

// export interface FilterCardsdAction {
//   type: typeof UPDATE_FILTERS;
//   payload: {};
// }

export interface InitFiltersAction {
  type: typeof INIT_FILTERS;
  payload: {
    all: AllFilters;
    currents: CurrentFilters;
    cards: Card[];
  };
}

export interface UpdateFiltersAction {
  type: typeof UPDATE_FILTERS;
  payload: {
    prop: string;
    value: string;
  };
}

export interface ResetFiltersAction {
  type: typeof RESET_FILTERS;
  payload: CurrentFilters;
}
export interface Loading {
  type: typeof LOADING;
}

export type FetchActions = FetchInfosAction | FetchCardsAction | Loading;
export type FilterActions = InitFiltersAction | UpdateFiltersAction | ResetFiltersAction;

import { InfosBase } from './';
export const FETCH_INFOS = 'FETCH_INFOS';
export const FETCH_CARDS = 'FETCH_CARDS';
export const SEARCH_CARD = 'SEARCH_CARD';
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

export interface Loading {
  type: typeof LOADING;
}

export type FetchAction = FetchInfosAction | FetchCardsAction | Loading;

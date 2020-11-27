import { compose } from 'redux';

export interface IWindow {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

export interface DataApi {
  data: {};
  config: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
}

export interface FetchOptions {
  method: 'GET';
  url: string;
  params: {
    locale: string;
  };
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };
}

export interface DefaultState {
  infos: InfosState;
}
export interface InfosState {
  base: InfosBase;
  cards: CardObject;
  isLoading: boolean;
}

export interface InfosBase {
  classes: string[];
  sets: string[];
  standard: string[];
  wild: string[];
  types: string[];
  factions: string[];
  qualities: string[];
  races: string[];
  locales: {};
}

export interface Card {
  cardId: string;
  dbfId: string;
  img: string;
  imgGold: string;
  name: string;
  cardSet: string;
  type: string;
  faction: string;
  health: number;
  text: string;
  playerClass: string;
  locale: string;
}

export interface CardObject {
  [key: string]: [];
}

export const all = 'All';

export { FETCH_INFOS, LOADING, FETCH_CARDS } from './actions';
export type { Loading, FetchAction } from './actions';

import { compose } from 'redux';

export interface IWindow {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

export interface FetchInfosAction {
  type: 'FETCH_INFOS';
  payload: {
    infos: {};
  };
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
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };
}

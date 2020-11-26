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

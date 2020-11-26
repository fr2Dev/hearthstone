export const FETCH_INFOS = 'FETCH_INFOS';
export const LOADING_INFOS = 'LOADING_INFOS';

export interface FetchInfosAction {
  type: typeof FETCH_INFOS;
  payload: {
    infos: {};
  };
}

export interface LoadingInfosAction {
  type: typeof LOADING_INFOS;
}

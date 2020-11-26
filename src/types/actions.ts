export const FETCH_INFOS = 'FETCH_INFOS';
export const LOADING = 'LOADING';

export interface FetchInfosAction {
  type: typeof FETCH_INFOS;
  payload: {};
}

export interface Loading {
  type: typeof LOADING;
}

export type InfosAction = FetchInfosAction | Loading;

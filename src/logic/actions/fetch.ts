import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
// API
import { getOptions } from '../api';
// Types
import { DataApi, FETCH_INFOS, FETCH_CARDS } from '../../types';

const optionsInfo = getOptions('info');
const optionsCards = getOptions('cards');

export const loadInfos = () => async (dispatch: Dispatch) => {
  const infos: AxiosResponse<DataApi> = await axios.get(optionsInfo.url, optionsInfo);
  const cards: AxiosResponse<DataApi> = await axios.get(optionsCards.url, optionsCards);

  dispatch({
    type: FETCH_INFOS,
    payload: { base: infos.data, cards: cards.data },
  });
};

export const loadCards = () => async (dispatch: Dispatch) => {
  const response: AxiosResponse<DataApi> = await axios.get(optionsCards.url, optionsCards);

  dispatch({
    type: FETCH_CARDS,
    payload: response.data,
  });
};

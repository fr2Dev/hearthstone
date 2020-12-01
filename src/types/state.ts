import { InfosBase, CardObject, Card, CurrentFilters } from './';

export interface DefaultState {
  infos: InfosState;
  search: SearchState;
  filters: FilterState;
}

export interface InfosState {
  base: InfosBase;
  cards: CardObject;
  isLoading: boolean;
}

export interface SearchState {
  value: string;
}

export interface FilterState {
  cards: {
    original: Card[];
    list: Card[];
  };
  all: {
    expansions: string[];
    classes: string[];
    types: string[];
  };
  currents: CurrentFilters;
}

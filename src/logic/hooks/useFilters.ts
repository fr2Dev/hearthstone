// Types
import { CardObject, InfosBase, Card, All, CurrentFilters } from '../../types';

const useFilters = (cards: CardObject, base: InfosBase) => {
  const { allCards, allExtensions } = getLists(cards);
  const cardsListOriginal = allCards.flat() as Card[];
  const { classes: classesDefault, types: typesDefault } = base;
  // Remove duplicate & unused classes
  const { classes, types } = getIntendedFilters(classesDefault, typesDefault);
  const allFilters = {
    expansions: [All, ...allExtensions],
    classes: [All, ...classes],
    types: [All, ...types],
  };

  const currentFilters = {
    expansion: allExtensions[allExtensions.length - 1],
    classe: All,
    type: All,
  };

  const cardsList = getFilteredCards(cardsListOriginal, currentFilters);

  return { allFilters, currentFilters, cardsListOriginal, cardsList };
};

export const getLists = (cards: CardObject) => {
  const blacklist = [
    'Missions',
    'Demo',
    'System',
    'Debug',
    'Promo',
    'Credits',
    'Hero Skins',
    'Tavern Brawl',
    'Taverns of Time',
    'Wild Event',
    'Battlegrounds',
  ];
  const allCards = [];
  const allExtensions = [];
  for (const property in cards) {
    if (!blacklist.includes(property)) {
      allCards.push(cards[property]);
      allExtensions.push(property);
    }
  }

  return { allCards, allExtensions };
};

export const getIntendedFilters = (classesDefault: string[], typesDefault: string[]) => {
  // Get ride of unwanted
  for (let i = classesDefault.length - 1; i >= 0; i--) {
    if (classesDefault[i] === 'Dream' || classesDefault[i] === 'Death Knight') {
      classesDefault.splice(i, 1);
    }
  }
  // Get ride of unwanted
  for (let j = typesDefault.length - 1; j >= 0; j--) {
    if (
      typesDefault[j] === 'Hero' ||
      typesDefault[j] === 'Hero Power' ||
      typesDefault[j] === 'Enchantment'
    ) {
      typesDefault.splice(j, 1);
    }
  }
  const classes = classesDefault.sort();
  const types = typesDefault.sort();

  return { classes, types };
};

export const getFilteredCards = (cards: Card[], currentFilters: CurrentFilters) => {
  const getFilterBase = (card: Card) =>
    (card.type === 'Spell' || card.type === 'Minion' || card.type === 'Weapon') &&
    card.text &&
    !card.text.includes('FX') &&
    card.img;
  const getFilterExpansion = (card: Card) =>
    currentFilters.expansion === All ? true : card.cardSet === currentFilters.expansion;
  const getFilterClasse = (card: Card) =>
    currentFilters.classe === All ? true : card.playerClass === currentFilters.classe;
  const getFilterType = (card: Card) =>
    currentFilters.type === All ? true : card.type === currentFilters.type;

  const filtered = cards
    .filter((card) => getFilterBase(card))
    .filter((card) => getFilterExpansion(card))
    .filter((card) => getFilterClasse(card))
    .filter((card) => getFilterType(card)) as Card[];

  return filtered;
};

export default useFilters;

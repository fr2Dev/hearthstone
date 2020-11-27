import { useState } from 'react';
// Types
import { CardObject, InfosBase, Card, all } from '../../types';

const useFilters = (cards: CardObject, base: InfosBase) => {
  const { allCards, allExtensions } = getLists(cards);
  const flatCards = allCards.flat() as Card[];
  const { classes: classesDefault, types: typesDefault } = base;
  // Remove duplicate & unused classes
  const { classes, types } = getIntendedFilters(classesDefault, typesDefault);
  const filters = {
    expansions: [all, ...allExtensions],
    classes: [all, ...classes],
    types: [all, ...types],
  };
  const [filter, setFilter] = useState({
    expansion: allExtensions[allExtensions.length - 1],
    classe: all,
    type: all,
  });

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => (prop: string) => {
    setFilter({ ...filter, [prop]: e.target.value });
  };

  const getFilteredCards = () => {
    const getFilterBase = (card: Card) =>
      (card.type === 'Spell' || card.type === 'Minion' || card.type === 'Weapon') &&
      card.text &&
      !card.text.includes('FX') &&
      card.img;
    const getFilterExpansion = (card: Card) =>
      filter.expansion === all ? true : card.cardSet === filter.expansion;
    const getFilterClasse = (card: Card) =>
      filter.classe === all ? true : card.playerClass === filter.classe;
    const getFilterType = (card: Card) => (filter.type === all ? true : card.type === filter.type);

    const filtered = flatCards
      .filter((card) => getFilterBase(card))
      .filter((card) => getFilterExpansion(card))
      .filter((card) => getFilterClasse(card))
      .filter((card) => getFilterType(card)) as Card[];

    return filtered;
  };

  const resetSubFilters = () => {
    setFilter({ ...filter, classe: all, type: all });
  };

  return { filters, filter, handleFilter, getFilteredCards, resetSubFilters, flatCards };
};

const getLists = (cards: CardObject) => {
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

const getIntendedFilters = (classesDefault: string[], typesDefault: string[]) => {
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

export default useFilters;

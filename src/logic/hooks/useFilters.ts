import { useState } from 'react';
// Types
import { CardObject } from '../../types';

const useFilters = (cards: CardObject) => {
  const { allCards, allExtensions } = getLists(cards);
  const [currentExtension, setCurrentExtension] = useState(allExtensions[allExtensions.length - 1]);
  const handleSelectExtension = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentExtension(e.target.value);
  };
  const flatCards = allCards.flat();
  return { allExtensions, currentExtension, handleSelectExtension, flatCards };
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
  const allExtensions = ['All'];
  for (const property in cards) {
    if (!blacklist.includes(property)) {
      allCards.push(cards[property]);
      allExtensions.push(property);
    }
  }

  return { allCards, allExtensions };
};

export default useFilters;

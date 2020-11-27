import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState, Card } from '../types';
// Components
import { CardsList } from './';
import { fadein } from './styled/animations';

export interface LastExtensionProps {}

const getLastExtensionName = (extansions: {}): string => {
  return Object.keys(extansions)[Object.keys(extansions).length - 1];
};

const getLists = (cards: { [key: string]: [] }) => {
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

const LastExtension: React.FC<LastExtensionProps> = () => {
  const { cards } = useSelector((state: DefaultState) => state.infos);
  const { allCards, allExtensions } = getLists(cards);
  const [currentExtension, setCurrentExtension] = useState(allExtensions[allExtensions.length - 1]);
  const flatCards = allCards.flat();
  const lastExtensionName = getLastExtensionName(cards);
  const handleSelectExtension = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentExtension(e.target.value);
  };

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <h1>Last Extension</h1>
      <h2>{lastExtensionName}</h2>
      <select value={currentExtension} onChange={handleSelectExtension}>
        {allExtensions.map((extension) => (
          <option key={extension}>{extension}</option>
        ))}
      </select>
      <div>
        <CardsList cards={flatCards} currentExtension={currentExtension} />
      </div>
    </motion.div>
  );
};

export default LastExtension;

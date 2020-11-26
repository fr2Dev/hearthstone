import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Types
import { DefaultState, Card } from '../types';
// Hooks
import { useMoreContent } from '../logic/hooks';
// Components
import { CardList } from './styled';

export interface LastExtensionProps {}

const getLastExtensionName = (extansions: {}): string => {
  return Object.keys(extansions)[Object.keys(extansions).length - 1];
};

const cardsPerPage = 10;

const LastExtension: React.FC<LastExtensionProps> = () => {
  const { cards, base } = useSelector((state: DefaultState) => state.infos);
  const lastStandard = base.standard[base.standard.length - 1];
  const lastExtensionName = getLastExtensionName(cards);
  const isLast = lastExtensionName.includes(lastStandard);
  // Get last extension
  const latestExtension = cards[lastExtensionName].filter(
    (card: Card) => (card.type === 'Spell' || card.type === 'Minion') && card.img
  );
  // Setup handler cards to show
  const { contentToShow, handleShowMoreContent, isMore } = useMoreContent(latestExtension as []);

  return (
    <div>
      <h1>Last Extension</h1>
      <h2>{lastExtensionName}</h2>
      <div>
        {isLast && (
          <>
            <CardList>
              {contentToShow.map((card) => {
                const { cardId, name, img } = card;

                return <li key={cardId}>{img && <img src={img} alt={name} />}</li>;
              })}
            </CardList>
            {isMore && <button onClick={handleShowMoreContent}>Load more</button>}
          </>
        )}
      </div>
    </div>
  );
};

export default LastExtension;

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Types
import { DefaultState, Card } from '../types';
// Components
import { CardList } from './styled';

export interface LastExtensionProps {}

const getLastExtensionName = (extansions: {}): string => {
  return Object.keys(extansions)[Object.keys(extansions).length - 1];
};

const postsPerPage = 10;

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
  const [cardsToShow, setCardsToShow] = useState([]);
  const [next, setNext] = useState(postsPerPage);
  const loopWithSlice = (start: number, end: number) => {
    const slicedPosts = [...latestExtension].slice(start, end);
    setCardsToShow([...cardsToShow, ...slicedPosts]);
  };
  const moreCardsAvailable = cardsToShow.length < latestExtension.length;

  // Use Effect
  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMoreCards = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div>
      <h1>Last Extension</h1>
      <h2>{lastExtensionName}</h2>
      <div>
        {isLast && (
          <>
            <CardList>
              {cardsToShow.map((card) => {
                const { cardId, name, img } = card;

                return <li key={cardId}>{img && <img src={img} alt={name} />}</li>;
              })}
            </CardList>
            {moreCardsAvailable && <button onClick={handleShowMoreCards}>Load more</button>}
          </>
        )}
      </div>
    </div>
  );
};

export default LastExtension;

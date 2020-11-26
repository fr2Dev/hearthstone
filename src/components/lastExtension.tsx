import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState, Card } from '../types';
// Hooks
import { useMoreContent } from '../logic/hooks';
// Components
import { CardList } from './styled';
import { fadein } from './styled/animations';

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
  const { contentToShow, handleShowMoreContent, handleShowAll, isMore } = useMoreContent(
    latestExtension as []
  );

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <h1>Last Extension</h1>
      <h2>{lastExtensionName}</h2>
      <div>
        {isLast && (
          <>
            <CardList>
              {contentToShow.map((card) => {
                const { cardId, name, img, imgGold } = card;

                return (
                  <li key={cardId}>{img && <img src={imgGold ? imgGold : img} alt={name} />}</li>
                );
              })}
            </CardList>
            {isMore && (
              <div>
                <button onClick={handleShowMoreContent}>Load more</button>
                <button onClick={handleShowAll}>Show All</button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default LastExtension;

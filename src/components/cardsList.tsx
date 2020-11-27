import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Types
import { Card } from '../types';
// Hooks
import { useMoreContent } from '../logic/hooks';
// Components
import { CardList, Button, ButtonWrapper } from './styled';
import { slideup } from './styled/animations';

export interface CardsListProps {
  cards: Card[];
  currentExpansion: string;
  getFilteredCards: () => Card[];
}

const CardsList: React.FC<CardsListProps> = ({ cards, getFilteredCards }) => {
  const [expansion, setExpansion] = useState(cards);
  const {
    contentToShow,
    resetContent,
    handleShowMoreContent,
    handleShowAll,
    isMore,
  } = useMoreContent(expansion as []);

  //useEffect
  useEffect(() => {
    const newExpansion = getFilteredCards();
    setExpansion(newExpansion);
    resetContent(newExpansion as []);
  }, [getFilteredCards]);

  return (
    <>
      <CardList>
        {contentToShow.length > 0 &&
          contentToShow.map((card) => {
            const { cardId, name, img, imgGold } = card;

            return (
              <li key={cardId}>
                <motion.div variants={slideup} initial="hidden" animate="show">
                  {img && <img src={imgGold ? imgGold : img} alt={name} />}
                </motion.div>
              </li>
            );
          })}
      </CardList>
      {isMore && (
        <ButtonWrapper>
          <Button onClick={handleShowMoreContent}>Load more</Button>
          <Button onClick={handleShowAll}>Show All</Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default CardsList;

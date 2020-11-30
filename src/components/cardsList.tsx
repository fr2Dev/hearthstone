import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Types
import { Card } from '../types';
// Hooks
import { useMoreContent } from '../logic/hooks';
// Components
import { CardList, NotFound, Button, ButtonWrapper } from './styled';
import { slideup } from './styled/animations';

export interface CardsListProps {
  cards: Card[];
  getFilteredCards: () => Card[];
  search: string;
}

const CardsList: React.FC<CardsListProps> = ({ cards, getFilteredCards, search }) => {
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

  const StandardDisplay = () => (
    <>
      <CardList>
        {contentToShow.length > 0 ? (
          contentToShow.map((card) => {
            const { cardId, name, img, imgGold } = card;

            return (
              <li key={cardId}>
                <motion.div variants={slideup} initial="hidden" animate="show">
                  {img && <img src={imgGold ? imgGold : img} alt={name} />}
                </motion.div>
              </li>
            );
          })
        ) : (
          <NotFound>Oops... no result</NotFound>
        )}
      </CardList>
      {isMore && (
        <ButtonWrapper>
          <Button onClick={handleShowMoreContent}>Load more</Button>
          <Button onClick={handleShowAll}>Show All</Button>
        </ButtonWrapper>
      )}
    </>
  );

  const SearchDisplay = () => {
    const searchList = expansion.filter((card: Card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <>
        {searchList.length > 0 && <p>{getNumberResults(searchList.length)}</p>}
        <CardList>
          {searchList.length > 0 ? (
            <>
              {searchList.map((card) => {
                const { cardId, name, img, imgGold } = card;

                return (
                  <li key={cardId}>
                    <motion.div variants={slideup} initial="hidden" animate="show">
                      {img && <img src={imgGold ? imgGold : img} alt={name} />}
                    </motion.div>
                  </li>
                );
              })}
            </>
          ) : (
            <NotFound>Oops... no result</NotFound>
          )}
        </CardList>
      </>
    );
  };

  return <>{search.length > 0 ? <SearchDisplay /> : <StandardDisplay />}</>;
};

const getNumberResults = (results: number) => `${results} result${results > 1 ? 's' : ''}`;

export default CardsList;

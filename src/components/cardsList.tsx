// Libraries
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
// Types
import { DefaultState, Card } from '../types';
// Logic
import { useMoreContent } from '../logic/hooks';
import { getFilteredCards } from '../logic/hooks/useFilters';
// Components
import { CardList, NotFound, Button, ButtonWrapper } from './styled';
import { slideup } from './styled/animations';

export interface CardsListProps {}

const CardsList: React.FC<CardsListProps> = () => {
  const { search, filters } = useSelector((state: DefaultState) => state);
  const { original, list } = filters.cards;
  const { currents } = filters;

  const [cards, setCards] = useState(list);
  const {
    contentToShow,
    resetContent,
    handleShowMoreContent,
    handleShowAll,
    isMore,
  } = useMoreContent(cards as []);

  //useEffect
  useEffect(() => {
    const newCards = getFilteredCards(original, currents);
    setCards(newCards);
    resetContent(newCards as []);
  }, [currents]);

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
    const searchList = cards.filter((card: Card) =>
      card.name.toLowerCase().includes(search.value.toLowerCase())
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
                    <div>{img && <img src={imgGold ? imgGold : img} alt={name} />}</div>
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

  return <>{search.value.length > 0 ? <SearchDisplay /> : <StandardDisplay />}</>;
};

const getNumberResults = (results: number) => `${results} result${results > 1 ? 's' : ''}`;

export default CardsList;

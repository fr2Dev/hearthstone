import { useEffect, useState } from 'react';
// Types
import { Card } from '../types';
// Hooks
import { useMoreContent } from '../logic/hooks';
// Components
import { CardList, Button, ButtonWrapper } from './styled';

export interface CardsListProps {
  cards: Card[];
  currentExtension: string;
}

const CardsList: React.FC<CardsListProps> = ({ cards, currentExtension }) => {
  const [extension, setExtension] = useState(cards);
  const {
    contentToShow,
    resetContent,
    handleShowMoreContent,
    handleShowAll,
    isMore,
  } = useMoreContent(extension as []);

  const getFilteredCards = (currentExtension: string) => {
    const getBaseFilter = (card: Card) =>
      (card.type === 'Spell' || card.type === 'Minion') &&
      card.text &&
      !card.text.includes('FX') &&
      card.img;

    if (currentExtension === 'All') {
      return cards.filter((card: Card) => getBaseFilter(card));
    } else {
      return cards.filter((card: Card) => getBaseFilter(card) && card.cardSet === currentExtension);
    }
  };

  //useEffect
  useEffect(() => {
    const newExtansion = getFilteredCards(currentExtension);
    setExtension(newExtansion);
    resetContent(newExtansion as []);
  }, [currentExtension]);

  return (
    <>
      <CardList>
        {contentToShow.length > 0 &&
          contentToShow.map((card) => {
            const { cardId, name, img, imgGold } = card;

            return <li key={cardId}>{img && <img src={imgGold ? imgGold : img} alt={name} />}</li>;
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

import { useSelector } from 'react-redux';
// Types
import { DefaultState, Card } from '../types';
// Components
import { CardList } from './styled';

export interface LastExtensionProps {}

const getLastExtensionName = (extansions: {}): string => {
  return Object.keys(extansions)[Object.keys(extansions).length - 1];
};

const LastExtension: React.FC<LastExtensionProps> = () => {
  const { cards, base } = useSelector((state: DefaultState) => state.infos);
  const lastStandard = base.standard[base.standard.length - 1];
  const lastExtensionName = getLastExtensionName(cards);
  const isLast = lastExtensionName.includes(lastStandard);
  const latestExtension = cards[lastExtensionName].filter(
    (card: Card) => (card.type === 'Spell' || card.type === 'Minion') && card.img
  );

  return (
    <div>
      <h1>Last Extension</h1>
      <h2>{lastExtensionName}</h2>
      <div>
        {isLast && (
          <CardList>
            {latestExtension.map((card) => {
              const { cardId, name, img } = card;

              return <li key={cardId}>{img && <img src={img} alt={name} />}</li>;
            })}
          </CardList>
        )}
      </div>
    </div>
  );
};

export default LastExtension;

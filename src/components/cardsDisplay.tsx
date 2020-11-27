import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState, Card } from '../types';
// Hooks
import { useFilters } from '../logic/hooks';
// Components
import { CardsList, Filters } from '.';
import { fadein } from './styled/animations';

export interface CardsDisplayProps {}

const CardsDisplay: React.FC<CardsDisplayProps> = () => {
  const { cards, base } = useSelector((state: DefaultState) => state.infos);
  const { filters, filter, handleFilter, getFilteredCards, flatCards } = useFilters(cards, base);

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <Filters filters={filters} filter={filter} handleFilter={handleFilter} />
      <div>
        <CardsList
          cards={flatCards}
          currentExpansion={filter.expansion}
          getFilteredCards={getFilteredCards}
        />
      </div>
    </motion.div>
  );
};

export default CardsDisplay;

import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState } from '../types';
// Hooks
import { useFilters } from '../logic/hooks';
// Components
import { CardsList, Filters } from '.';
import { fadein } from './styled/animations';

export interface CardsDisplayProps {}

const CardsDisplay: React.FC<CardsDisplayProps> = () => {
  const { cards, base } = useSelector((state: DefaultState) => state.infos);
  const {
    filters,
    filter,
    handleFilter,
    getFilteredCards,
    resetSubFilters,
    flatCards,
  } = useFilters(cards, base);

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <Filters
        filters={filters}
        filter={filter}
        handleFilter={handleFilter}
        resetSubFilters={resetSubFilters}
      />
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

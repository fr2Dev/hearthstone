import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState } from '../types';
// Hooks
import { useFilters } from '../logic/hooks';
// Components
import { CardsList, Filters, Search } from '.';
import { fadein } from './styled/animations';

export interface CardsDisplayProps {}

const CardsDisplay: React.FC<CardsDisplayProps> = () => {
  const { infos, search } = useSelector((state: DefaultState) => state);
  const { cards, base } = infos;
  const { value } = search;

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
      <Search />
      <div>
        <CardsList cards={flatCards} getFilteredCards={getFilteredCards} search={value} />
      </div>
    </motion.div>
  );
};

export default CardsDisplay;

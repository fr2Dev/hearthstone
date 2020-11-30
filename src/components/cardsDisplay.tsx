import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState } from '../types';
// Hooks
import { useFilters, useSearch } from '../logic/hooks';
// Components
import { CardsList, Filters, Search } from '.';
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
  const { search, inputHandler, handleSubmit } = useSearch();

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <Filters
        filters={filters}
        filter={filter}
        handleFilter={handleFilter}
        resetSubFilters={resetSubFilters}
      />
      <Search inputHandler={inputHandler} handleSubmit={handleSubmit} />
      <div>
        <CardsList cards={flatCards} getFilteredCards={getFilteredCards} search={search} />
      </div>
    </motion.div>
  );
};

export default CardsDisplay;

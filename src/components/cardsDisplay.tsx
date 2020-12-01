import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
// Types
import { DefaultState } from '../types';
// Logic
import { initFilters } from '../logic/actions';
// Components
import { CardsList, Filters, Search } from '.';
import { fadein } from './styled/animations';

export interface CardsDisplayProps {}

const CardsDisplay: React.FC<CardsDisplayProps> = () => {
  const dispatch = useDispatch();
  const { infos, search } = useSelector((state: DefaultState) => state);
  const { cards, base } = infos;
  const { value } = search;

  useEffect(() => {
    dispatch(initFilters(cards, base));
  }, [dispatch]);

  // const {
  //   filters,
  //   filter,
  //   handleFilter,
  //   getFilteredCards,
  //   resetSubFilters,
  //   flatCards,
  // } = useFilters(cards, base);

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <Filters />
      <Search />
      {/* <div>
        <CardsList cards={flatCards} getFilteredCards={getFilteredCards} search={value} />
      </div> */}
    </motion.div>
  );
};

export default CardsDisplay;

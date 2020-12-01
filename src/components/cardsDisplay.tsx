// Libraries
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
  const { cards, base } = useSelector((state: DefaultState) => state.infos);

  useEffect(() => {
    dispatch(initFilters(cards, base));
  }, [dispatch]);

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <Filters />
      <Search />
      <div>
        <CardsList />
      </div>
    </motion.div>
  );
};

export default CardsDisplay;

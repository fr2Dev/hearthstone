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
  const { cards } = useSelector((state: DefaultState) => state.infos);
  const { allExtensions, currentExtension, handleSelectExtension, flatCards } = useFilters(cards);

  return (
    <motion.div variants={fadein} initial="hidden" animate="show">
      <Filters
        extensions={allExtensions}
        currentExtension={currentExtension}
        handleSelectExtension={handleSelectExtension}
      />
      <div>
        <CardsList cards={flatCards} currentExtension={currentExtension} />
      </div>
    </motion.div>
  );
};

export default CardsDisplay;

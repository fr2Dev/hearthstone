// Libraries
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters, resetFilters } from '../logic/actions';
// Types
import { All, DefaultState } from '../types';
//Components
import { Button, Select, InputsWrapper } from './styled';

export interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  const dispatch = useDispatch();
  const { all: filters, currents: filter } = useSelector((state: DefaultState) => state.filters);
  const { expansions, classes, types } = filters;
  const { expansion, classe, type } = filter;
  const noReset = classe === All && type === All;

  return (
    <InputsWrapper>
      <div>
        <p>Expansions</p>
        <Select
          value={expansion}
          onChange={(e) => dispatch(updateFilters(e)('expansion'))}
          name="extansion"
        >
          {expansions.map((ext) => (
            <option key={ext}>{ext}</option>
          ))}
        </Select>
      </div>
      <div>
        <p>Classes</p>
        <Select
          value={classe}
          onChange={(e) => dispatch(updateFilters(e)('classe'))}
          name="classes"
        >
          {classes.map((cla) => (
            <option key={cla}>{cla}</option>
          ))}
        </Select>
      </div>
      <div>
        <p>Types</p>
        <Select value={type} onChange={(e) => dispatch(updateFilters(e)('type'))} name="types">
          {types.map((typ) => (
            <option key={typ}>{typ}</option>
          ))}
        </Select>
      </div>
      <Button
        style={{ alignSelf: 'flex-end', marginTop: '.5rem', marginBottom: '.5rem' }}
        disabled={noReset}
        onClick={() => dispatch(resetFilters())}
      >
        Reset
      </Button>
    </InputsWrapper>
  );
};

export default Filters;

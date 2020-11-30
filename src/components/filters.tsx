// Types
import { all } from '../types';
//Components
import { Button, Select, InputsWrapper } from './styled';

export interface FiltersProps {
  filters: { expansions: string[]; classes: string[]; types: string[] };
  filter: { expansion: string; classe: string; type: string };
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => (prop: string) => void;
  resetSubFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, filter, handleFilter, resetSubFilters }) => {
  const { expansions, classes, types } = filters;
  const { expansion, classe, type } = filter;
  const noReset = classe === all && type === all;
  return (
    <InputsWrapper>
      <div>
        <p>Expansions</p>
        <Select value={expansion} onChange={(e) => handleFilter(e)('expansion')}>
          {expansions.map((ext) => (
            <option key={ext}>{ext}</option>
          ))}
        </Select>
      </div>
      <div>
        <p>Classes</p>
        <Select value={classe} onChange={(e) => handleFilter(e)('classe')}>
          {classes.map((cla) => (
            <option key={cla}>{cla}</option>
          ))}
        </Select>
      </div>
      <div>
        <p>Types</p>
        <Select value={type} onChange={(e) => handleFilter(e)('type')}>
          {types.map((typ) => (
            <option key={typ}>{typ}</option>
          ))}
        </Select>
      </div>
      <Button
        style={{ alignSelf: 'flex-end', marginTop: '.5rem', marginBottom: '.5rem' }}
        disabled={noReset}
        onClick={resetSubFilters}
      >
        Reset
      </Button>
    </InputsWrapper>
  );
};

export default Filters;

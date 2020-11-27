export interface FiltersProps {
  filters: { expansions: string[]; classes: string[]; types: string[] };
  filter: { expansion: string; classe: string; type: string };
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => (prop: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, filter, handleFilter }) => {
  const { expansions, classes, types } = filters;
  const { expansion, classe, type } = filter;
  return (
    <div>
      <select value={expansion} onChange={(e) => handleFilter(e)('expansion')}>
        {expansions.map((ext) => (
          <option key={ext}>{ext}</option>
        ))}
      </select>
      <select value={classe} onChange={(e) => handleFilter(e)('classe')}>
        {classes.map((cla) => (
          <option key={cla}>{cla}</option>
        ))}
      </select>
      <select value={type} onChange={(e) => handleFilter(e)('type')}>
        {types.map((typ) => (
          <option key={typ}>{typ}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;

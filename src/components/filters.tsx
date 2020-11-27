export interface FiltersProps {
  extensions: string[];
  currentExtension: string;
  handleSelectExtension: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({
  extensions,
  currentExtension,
  handleSelectExtension,
}) => {
  return (
    <div>
      <select value={currentExtension} onChange={handleSelectExtension}>
        {extensions.map((extension) => (
          <option key={extension}>{extension}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;

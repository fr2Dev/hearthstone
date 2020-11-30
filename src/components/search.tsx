//Components
import { Input, InputsWrapper } from './styled';

export interface SearchProps {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<SearchProps> = ({ inputHandler, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p style={{ marginBottom: '.5rem' }}>Search</p>
      <InputsWrapper>
        <Input type="text" name="search" placeholder="Search something" onChange={inputHandler} />
      </InputsWrapper>
    </form>
  );
};

export default Search;

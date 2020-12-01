// Libraries
import { useDispatch } from 'react-redux';
// Logic
import { searchCard } from '../logic/actions';
// Components
import { Input, InputsWrapper } from './styled';

export interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCard(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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

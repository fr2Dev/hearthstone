import { useState, useEffect } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };
  return { search, inputHandler, handleSubmit };
};

export default useSearch;

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Wrapper, Input, SearchForm } from './SearchBox.styled';

export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedInputValue = localStorage.getItem('myInputValue');
    if (savedInputValue) {
      setInputValue(savedInputValue);
    }
  }, []);

  const handleInputChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const query = value.trim();
    setSearchParams({ query });
    setInputValue(query);
    localStorage.setItem('myInputValue', query);
  };

  return (
    <Wrapper>
      <SearchForm>
        <Input
          name="searchQuery"
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Filter by name..."
          autoComplete="off"
          autoFocus
        />
      </SearchForm>
    </Wrapper>
  );
};

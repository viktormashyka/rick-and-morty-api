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
    console.log('savedInputValue: ', savedInputValue);
  }, []);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const value = e.target.searchQuery.value;
  //   const query = value.trim();
  //   console.log('query: ', query);
  //   console.log('inputValue: ', inputValue);

  //   if (!query) {
  //     alert('empty query');
  //     return;
  //   }

  //   setSearchParams({ query });
  //   setInputValue(query);

  //   localStorage.setItem('myInputValue', query);
  // };

  const handleInputChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const query = value.trim();
    console.log('query: ', query);
    console.log('inputValue: ', inputValue);
    setSearchParams({ query });
    setInputValue(query);
    localStorage.setItem('myInputValue', query);
  };

  return (
    <Wrapper>
      {/* <SearchForm onSubmit={handleSubmit}> */}
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

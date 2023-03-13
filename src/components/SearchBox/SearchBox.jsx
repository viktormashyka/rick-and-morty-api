import { useSearchParams } from 'react-router-dom';
import {
  Wrapper,
  Input,
  Icon,
  SearchForm,
  SearchFormButton,
} from './SearchBox.styled';

export const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.searchQuery.value;
    const query = value.trim();
    console.log('query: ', query);

    if (!query) {
      alert('empty query');
      return;
    }
    setSearchParams({ query });
  };
  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton>
          <Icon />
        </SearchFormButton>
        <Input
          name="searchQuery"
          type="text"
          placeholder="Filter by name..."
          autoComplete="off"
          autoFocus
        />
      </SearchForm>
    </Wrapper>
  );
};

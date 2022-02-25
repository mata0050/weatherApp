import React, { useState } from 'react';
import styled from 'styled-components';

function Search() {
  const [search, setSearch] = useState('');

  const onChange = (e) => setSearch((prevSate) => e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log(search)
  return (
    <StyledSearch>
      <form onSubmit={onSubmit}>
        <input type='text' value={search} onChange={onChange} />
      </form>
    </StyledSearch>
  );
}

const StyledSearch = styled.div``;

export default Search;

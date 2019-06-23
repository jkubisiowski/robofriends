import React from 'react';

export const SearchBox = ({ searchField, searchChanged }) => {
  return (
    <div className="pa2">
      <input
        value={searchField}
        onChange={searchChanged}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';

export function Searchbar({ handleSearchInput }) {
  return (
    <div>
      <Formik
        initialValues={{ input: '' }}
        onSubmit={({ input }, { resetForm }) => {
          if (input.trim() === '') return;
          handleSearchInput(input);
          resetForm();
        }}
      >
        <SearchForm>
          <SearchInput
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          ></SearchInput>{' '}
          <SearchButton type="submit">
            <BiSearchAlt />
          </SearchButton>
        </SearchForm>
      </Formik>
    </div>
  );
}

Searchbar.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
};

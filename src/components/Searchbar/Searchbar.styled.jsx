import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  font-size: 28px;

  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  line-height: 1.5em;
  border: none;
  outline: none;
  padding: 0 16px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

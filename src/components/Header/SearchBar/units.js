import styled from '@emotion/styled';
import { css } from '@emotion/core';

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FieldWrapper = styled.div`
  ${({ isSearchOpen }) => css`
    display: ${isSearchOpen ? 'flex' : 'none'};
    flex-direction: column;
    width: 33%;
  `}
`;

const FieldTitle = styled.span`
  font-size: 0.8rem;
  color: #676c6d;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.span((props) => ({
  display: props.error ? 'inline' : 'none',
  fontSize: '0.8rem',
  color: 'darkred'
}));


const FieldInput = styled.input`
  display: flex;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #676c6d;
  padding: 0.5% 0%;
  font-size: 1.2rem;
  color: #6ccbcd;
  text-transform: uppercase
`;

const Button = styled.button((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  border: 'none',
  background: !props.disabled ? '#6ccbcd' : '#d19064',
  outline: 'none',
  color: 'white',
  cursor: 'pointer'
}));

export {
  SearchForm,
  FieldWrapper,
  FieldTitle,
  ErrorMessage,
  FieldInput,
  Button
};

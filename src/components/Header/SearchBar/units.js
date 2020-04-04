import styled from '@emotion/styled';
import { css } from '@emotion/core';

const SearchForm = styled.form`
position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: green;
`;

const DinamicWrapper = styled.div`
  ${({ isSearchClosed, error }) => css`
    width: ${isSearchClosed && !error ? '0px' : '300px'};
    display: flex;
    flex-direction: row;
    align-items: center;
    background: blue;
    transition: width 1s cubic-bezier(0, 0, 1, 1) 500ms;
  `}
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const TextField = styled.span`
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

const OpenSearch = styled.button`
  ${({ isSearchClosed }) => css`
    position: absolute;
    top:0;
    right:0;
    z-index: 2;
    visibility: ${isSearchClosed ? 'visible' : 'hidden'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background: #6ccbcd;
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    height: 45.09px;
    transition: visibility 0.3s ease-in-out;
  `}
`;

export {
  SearchForm,
  DinamicWrapper,
  Wrapper,
  TextField,
  ErrorMessage,
  FieldInput,
  OpenSearch,
  Button
};

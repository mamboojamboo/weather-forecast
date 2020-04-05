import styled from '@emotion/styled';
import { css } from '@emotion/core';

const SearchForm = styled.form`
position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
`;

const DinamicWrapper = styled.div`
  ${({ isSearchClosed, error }) => css`
    width: ${isSearchClosed && !error ? '0px' : '300px'};
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    background: blue;
    transition: width 0.8s cubic-bezier(0, 0, 1, 1);
  `}
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

const TextField = styled.span`
  font-size: 0.8rem;
  color: #676c6d;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.span`
  ${({ error }) => css`
    display: ${error ? 'inline' : 'none'};
    font-size: 0.8rem;
    color: darkred;
  `}
`;

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

const SubmitButton = styled.button`
  ${({ disabled }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    border: none;
    background: ${!disabled ? '#6ccbcd' : '#d19064'};
    outline: none;
    color: white;
    cursor: pointer;
    min-width: 120px;
    height: 100%;
  `}
`;

const OpenSearchButton = styled.button`
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
    min-width: 120px;
    height: 100%;
    transition: visibility 0.1s;
  `}
`;

export {
  SearchForm,
  DinamicWrapper,
  Wrapper,
  TextField,
  ErrorMessage,
  FieldInput,
  SubmitButton,
  OpenSearchButton
};

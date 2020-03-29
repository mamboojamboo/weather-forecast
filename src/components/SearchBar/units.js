import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const FieldWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 33%;
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
  width: '20%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  border: 'none',
  background: !props.disabled ? '#6ccbcd' : '#d19064',
  outline: 'none',
  borderRadius: '5px',
  color: 'white',
  // boxShadow: !props.disabled ? '0 5px 0 #a64403' : '0 5px 0 #d17b41',
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

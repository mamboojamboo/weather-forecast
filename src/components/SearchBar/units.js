import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 2%;
`;

const FieldWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 33%;
`;

const FieldTitle = styled.span`
  font-size: 0.8rem;
  color: white;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: darkred;
`;

const FieldInput = styled.input`
  display: flex;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  padding: 0.5% 0%;
  font-size: 1.2rem;
  color:white;
  text-transform: uppercase
`;

const Button = styled.button((props) => ({
  display: 'flex',
  width: '20%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  border: 'none',
  background: !props.disabled ? '#d55905' : '#d19064',
  outline: 'none',
  borderRadius: '5px',
  color: 'white',
  boxShadow: !props.disabled ? '0 5px 0 #a64403' : '0 5px 0 #d17b41',
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

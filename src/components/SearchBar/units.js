import styled from '@emotion/styled';

const BarForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding: 2%;
`;

const InputInBarForm = styled.input`
  display: flex;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  width: 33%;
  padding: 0.5% 0%;
  font-size: 1.2rem;
  color:white;
  text-transform: uppercase
`;

const ButtonInBarForm = styled.button((props) => ({
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
  boxShadow: !props.disabled ? '0 5px 0 #a64403' : '0 5px 0 #d17b41'
}));

export {
  BarForm,
  InputInBarForm,
  ButtonInBarForm
};

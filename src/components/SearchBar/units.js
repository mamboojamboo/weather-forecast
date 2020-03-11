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

const ButtonInBarForm = styled.button`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border: none;
  background: #d55905;
  outline: none;
  border-radius: 5px;
  color: white;
`;

export {
  BarForm,
  InputInBarForm,
  ButtonInBarForm
};

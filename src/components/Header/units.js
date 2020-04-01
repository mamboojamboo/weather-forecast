import styled from '@emotion/styled';
// import { css } from '@emotion/core';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #676c6d;
  padding: 2% 1%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin-top: 2%;
`;

const Title = styled.span`
  font-size: 2rem;
  color: black;
`;

export { Wrapper, Title };

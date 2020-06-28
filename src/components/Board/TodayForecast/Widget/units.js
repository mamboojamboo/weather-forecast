import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  position: relative;
  background-color: white;
  border-radius: 10px;
  width: 32%;
  height: 250px;
  margin-bottom: 24px;
`;

const Title = styled.span`
  font-size: 14px;
  margin-bottom: 12px;
`;

const Numeric = styled.span`
  font-size: 14px;
`;

export { StyledWrapper, Title, Numeric };

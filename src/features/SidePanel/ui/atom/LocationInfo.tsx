import styled from 'styled-components';

export const LocationInfo = () => (
  <StyledWrapper>
    <span>London, UK</span>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5%;
`;
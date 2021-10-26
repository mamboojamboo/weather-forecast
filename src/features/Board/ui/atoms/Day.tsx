import React from 'react';
import styled from 'styled-components';

type TDay = {
  day: string,
  icon: null,
  temperature: string
}

export const Day = ({ day, icon, temperature }: TDay) => {
  return (
    <StyledWrapper>
      <Title>{day}</Title>
      <Icon>{icon}</Icon>
      <Temperature>{temperature}</Temperature>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  position: relative;
  background-color: white;
  border-radius: 10px;
  width: 12%;
  height: 200px;
`;

const Title = styled.span`
  font-size: 14px;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: grey;
  margin-bottom: 12px;
`;

const Temperature = styled.span`
  font-size: 14px;
`;

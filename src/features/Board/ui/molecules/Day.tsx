import styled from 'styled-components';

import { COLORS } from '../../../../constants/colors';

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
  width: 12%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
  border-radius: 10px;
  background-color: ${COLORS.WHITE};
`;

const Title = styled.span`
  font-size: 14px;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${COLORS.DARK_GREY};
  margin-bottom: 12px;
`;

const Temperature = styled.span`
  font-size: 14px;
`;

import styled from 'styled-components';

import { SidePanelContainer } from '../../features/SidePanel';
import { BoardInfoContainer } from '../../features/Board';

import { COLORS } from '../../constants/colors';


export const MainPage = () => (
  <StyledWrapper>
    <SidePanelContainer />
    <BoardInfoContainer />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${COLORS.GREY};
`;
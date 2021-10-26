import React from 'react';

import { StyledWrapper } from './units';
import SidePanel from '../../features/SidePanel/SidePanel';
import { BoardInfoContainer } from '../../features/Board';

const MainPage = () => (
  <StyledWrapper>
    <SidePanel />
    <BoardInfoContainer />
  </StyledWrapper>
);

export default MainPage;
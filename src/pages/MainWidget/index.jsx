import React from 'react';

import SidePanel from '../../components/SidePanel';

import { StyledWrapper } from './units';
import Board from '../../components/Board';

const MainWidget = () => {
  const data = 'test';
  return (
    <StyledWrapper>
      <SidePanel />
      <Board />
    </StyledWrapper>
  );
};

export default MainWidget;

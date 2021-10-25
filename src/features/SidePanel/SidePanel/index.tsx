import React from 'react';

import Search from './Search';
import PointInfo from './PointInfo';
import { StyledWrapper, Wrapper } from './units';

const SidePanel = () => {
  const data = 'SidePanel';
  return (
    <StyledWrapper>
      <Wrapper>
        <Search />
        <PointInfo />
      </Wrapper>
      {data}
    </StyledWrapper>
  );
};

export default SidePanel;

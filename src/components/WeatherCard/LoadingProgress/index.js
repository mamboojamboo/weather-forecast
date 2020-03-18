import React from 'react';

import Wrapper from './units';

const LoadingProgress = ({ isLoading }) => (
    <Wrapper {...{ isLoading }}>
      Loading your weather ...
    </Wrapper>

);
export default LoadingProgress;

import React from 'react';

import Wrapper from './units';

const LoadingProgress = ({ isLoading }) => (
  (isLoading)
    ? (<Wrapper>
        Loading ...
      </Wrapper>)
    : null
);

export default LoadingProgress;

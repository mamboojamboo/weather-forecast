import styled from 'styled-components';

import { COLORS } from '../../../../constants/colors';

import { Search } from '../molecules/Search';
import { LocationInfo } from '../atom/LocationInfo';


export const SidePanelContainer = () => {
  const appVersion = `Version: ${process.env.REACT_APP_VERSION}`;
  return (
    <StyledWrapper>
      <Wrapper>
        <Search />
        <LocationInfo />
      </Wrapper>
      {appVersion}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 2%;
  background-color: ${COLORS.WHITE};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
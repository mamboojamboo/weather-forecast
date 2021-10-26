import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

import Search from './Search';
import PointInfo from './PointInfo';

export const SidePanel = () => {
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
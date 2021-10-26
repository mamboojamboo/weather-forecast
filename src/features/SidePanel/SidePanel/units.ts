import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

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

export { StyledWrapper, Wrapper };

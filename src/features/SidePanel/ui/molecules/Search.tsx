import styled from 'styled-components';

import { COLORS } from '../../../../constants/colors';

export const Search = () => {
  const data = 'Search';
  return <StyledWrapper>{data}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
  padding: 1.383% 5%;
  border-radius: 10px;
  background-color: ${COLORS.GREY};
`;

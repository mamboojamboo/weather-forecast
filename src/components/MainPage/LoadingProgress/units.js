import styled from '@emotion/styled';

const Wrapper = styled.div((props) => ({
  display: props.isLoading ? 'flex' : 'none',
  flexDirection: 'row',
  justifyContent: 'center'
}));

export default Wrapper;

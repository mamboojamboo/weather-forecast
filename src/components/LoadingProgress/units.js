import styled from '@emotion/styled';

const Wrapper = styled.div((props) => ({
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: '2',
  display: props.isLoading ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
  // visibility: props.isLoading ? 'visible' : 'hidden',
  width: '100%',
  height: '100%',
  flexDirection: 'row'
}));

export default Wrapper;

// visibility: props.isLoading ? 'visible' : 'hidden',

import { getContext, resetContext } from 'kea';
import thunkPlugin from 'kea-thunk';

resetContext({
  createStore: true,
  plugins: [thunkPlugin]
});

export default getContext().store;

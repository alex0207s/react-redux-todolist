import { Middleware } from 'redux';
import { RootState } from './store';

export const logger: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

// export const exampleMiddleware: Middleware<
//   {}, // Most middleware do not modify the dispatch return value
//   RootState
// > = (storeApi) => (next) => (action) => {
//   const state = storeApi.getState(); // correctly typed as RootState
// };

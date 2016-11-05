import * as Immutable from 'seamless-immutable';
import { exampleReducer } from './reducers';
import { State } from './models';

const INITIAL_STATE = Immutable.from({});

// TODO "any" is very difficult to avoid with seamless-immutable's deep immutable conversion,
// but typing here is also very low-value since we're just combining reducers at this level
export const rootReducer = (state: any = INITIAL_STATE, action: any): State => {
  return state.merge({
    example: exampleReducer(state.example, action),
  });
};

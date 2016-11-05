import * as Immutable from 'seamless-immutable';
import { Example } from '../models';
import { ExampleAction } from '../actions/exampleActions';
import { Action } from '../models';

type Actions = ExampleAction;

const INITIAL_STATE: Example = Immutable.from({ example: 'something' });

export const exampleReducer = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case 'EXAMPLE':
      return state.set('example', action.payload.example);
    default:
      return state;
  }
};

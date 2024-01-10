import { createReducer, on } from '@ngrx/store';
import { GetCounters, SetCounters } from '../actions/counter.actions';

export const configFeatureKey = 'counters';

export interface State {
  count: number | null;
}

export const initialState: State = {
  count: null,
};

export const reducer = createReducer(
  initialState,
  on(GetCounters['[GetCounters]GetCounters'], (state) => {
    return {
      ...state,
    };
  }),
  on(SetCounters['[SetCounters]SetCountersSuccess'], (state, action) => {
    return {
      ...state,
      count: action.count,
    };
  }),
  on(SetCounters['[SetCounters]SetCountersFailure'], (state) => {
    return {
      ...state,
      count: null,
    };
  }),
);

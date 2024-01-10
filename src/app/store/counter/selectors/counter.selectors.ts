import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, configFeatureKey } from "../reducers/counter.reducers";

export const selectCountersState = createFeatureSelector<State>(configFeatureKey);

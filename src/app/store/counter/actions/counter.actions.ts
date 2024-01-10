import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const GetCounters = createActionGroup({
    source: 'GetCounters',
    events: {
      '[GetCounters] Get Counters': emptyProps(),
    },
});
  

export const SetCounters = createActionGroup({
    source: 'SetCounters',
    events: {
        '[SetCounters] Set Counters Success': props<{ count: number }>(),
        '[SetCounters] Set Counters Failure': emptyProps(),
    }
})
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CounterService } from 'src/app/service/counter/counter.service';
import { GetCounters, SetCounters } from '../actions/counter.actions';

@Injectable()
export class counterEffect {
  constructor(private actions$: Actions, private counterService: CounterService) {}

  $getCounter = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetCounters['[GetCounters]GetCounters']),
      mergeMap(() =>
        this.counterService.getRandomNumber().pipe(
          map((res: any) => SetCounters['[SetCounters]SetCountersSuccess']({ count: res[0] })),
          catchError(() => of(SetCounters['[SetCounters]SetCountersFailure']()))
        )
      )
    );
  });
}

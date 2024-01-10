import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GetCounters, SetCounters } from './actions/counter.actions';
import { selectCountersState } from './selectors/counter.selectors';
import { CounterService } from 'src/app/service/counter/counter.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterState$: Observable<any> = this.store.select(selectCountersState);
  unsubus$: Subject<boolean> = new Subject();
  counter!: number;

  constructor(private store: Store<any>, private counterNumber: CounterService) {
  }

  increment() {
    this.store.dispatch(SetCounters['[SetCounters]SetCountersSuccess']({ count: this.counter+1 }));
  }

  decrement() {
    this.store.dispatch(SetCounters['[SetCounters]SetCountersSuccess']({ count: this.counter-1 }));
  }

  reset() {
    this.store.dispatch(GetCounters['[GetCounters]GetCounters']());
  }
  ngOnInit(): void {
    this.store.dispatch(GetCounters['[GetCounters]GetCounters']());
    this.counterState$.pipe(takeUntil(this.unsubus$)).subscribe((res: any) => {
      if(res){
        this.counter = res.count;
      }
    });
  }
  ngOnDestroy(): void {
    this.unsubus$.next(true);
    this.unsubus$.complete();
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CounterService {

    constructor(private http: HttpClient,) {}

    getRandomNumber(): Observable<number[]> {
        return this.http.get<number[]>('/api/api/v1.0/random?min=0&max=100&count=1')
    }
}  
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, publishReplay, refCount } from 'rxjs/operators';

import { Route } from '../models/route';


@Injectable({ providedIn: 'root' })
export class RouteService {

    public getRoutes(): Observable<Route[]> {
        return of([
            {
                description: 'First route',
                distance: 120,
                duration: '1h 30m',
                id: '6c5k8ysj58'
            },
            {
                description: 'Second route',
                distance: 150,
                duration: '1h 50m',
                id: 'b5p23koff5'
            },
            {
                description: 'Third route',
                distance: 130,
                duration: '1h 10m',
                id: '0faviu5uo0'
            },
            {
                description: 'Fourth route',
                distance: 190,
                duration: '2h 30m',
                id: 'yf2gbo0vdd'
            },
            {
                description: 'Fifth route',
                distance: 170,
                duration: '3h 0m',
                id: '6cv6ph0e5r'
            }
        ]).pipe(
            publishReplay(1),
            refCount(),
            delay(2500)
        );
    }
}

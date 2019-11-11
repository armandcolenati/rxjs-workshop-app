import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, publishReplay, refCount } from 'rxjs/operators';

import { Employee } from '../models/employee';


@Injectable({ providedIn: 'root' })
export class EmployeeService {

    public getEmployees(departmentId: string): Observable<Employee[]> {
        if (departmentId !== '7ma2ahx9eq') {
            return of([]);
        }

        return of([
            {
                age: 24,
                departmentId: '7ma2ahx9eq',
                id: '01g7opadko',
                name: 'Kayden Shaw'
            },
            {
                age: 34,
                departmentId: '7ma2ahx9eq',
                id: 'e3qt8erchy',
                name: 'Jarod Gerald'
            },
            {
                age: 51,
                departmentId: '7ma2ahx9eq',
                id: 'fdbw27c3sd',
                name: 'Marshall Norman'
            },
            {
                age: 27,
                departmentId: '7ma2ahx9eq',
                id: 'cfyr497cqe',
                name: 'Lyndsey Brenden'
            },
            {
                age: 43,
                departmentId: '7ma2ahx9eq',
                id: '1tlm009kso',
                name: 'Fred Brandon'
            },
        ]).pipe(
            publishReplay(1),
            refCount(),
            delay(1200)
        );
    }
}

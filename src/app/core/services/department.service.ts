import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, publishReplay, refCount } from 'rxjs/operators';

import { Department } from '../models/department';


@Injectable({ providedIn: 'root' })
export class DepartmentService {

    public getCurrentDepartment(): Observable<Department> {
        return of({
            id: '7ma2ahx9eq',
            name: 'ORTEC Software Development'
        }).pipe(
            publishReplay(1),
            refCount(),
            delay(1200)
        );
    }
}

import { Component, OnInit } from '@angular/core';
import { RouteService } from './core/services/route.service';
import { DepartmentService } from './core/services/department.service';
import { EmployeeService } from './core/services/employee.service';
import { Route } from './core/models/route';
import { Department } from './core/models/department';
import { Employee } from './core/models/employee';
import { Observable, of } from 'rxjs';
import { isPending } from './core/rxjs-utils/is-pending.operator';
import { FormControl } from '@angular/forms';
import { switchMap, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public department$!: Observable<Department>;
    public routes$!: Observable<Route[]>;
    public employees$!: Observable<Employee[]>;
    public searchControl = new FormControl('');

    constructor(
        private readonly routeService: RouteService,
        private readonly departmentService: DepartmentService,
        private readonly employeeService: EmployeeService
    ) { }

    public ngOnInit(): void {
        // Exercise 1
        // Create an observable of routes, get the routes from the service, subscribe and log the data in the console



        /* ! DELETE THE CODE FROM THE PREVIOUS EXERCISE ! */

        // Exercise 2
        // The numbers$ observable will emit a couple of numbers: 1, 12, 3, 6, 19, 9, 24
        // You have to log to the console the numbers multiplied by 2
        const numbersEx2$ = this.getStreamOfNumbers();



        /* ! DELETE THE CODE FROM THE PREVIOUS EXERCISE ! */

        // Exercise 3
        // The numbers$ observable will emit a couple of numbers: 1, 12, 3, 6, 19, 9, 24
        // You have to log to the console only the even numbers
        const numbersEx3$ = this.getStreamOfNumbers();



        /* ! DELETE THE CODE FROM THE PREVIOUS EXERCISE ! */

        // Exercise 4
        // Retrieve the employees assigned to the current department from the service
        // Display in the template the names of the employees which are older than 30 years



        /* ! DELETE THE CODE FROM THE PREVIOUS EXERCISE ! */

        // Exercise 5
        // Retrieve the routes, the current department and the assigned employees and hold them in separate observables
        // Display the data in the template (hide everything while the data is still being loaded)
        // Display a loading text label in the template while you're still waiting for all data (use the isPending operator)



        /* ! DELETE THE CODE FROM THE PREVIOUS EXERCISE ! */

        // Exercise 6
        // Retrieve the employees assigned to the current department from the service
        // Implement a debounced search for the name property of the employees
        // Display in the template the employees matching the search query, or all employees if there is no search query



        /* ! DELETE THE CODE FROM THE PREVIOUS EXERCISE ! */
    }

    private getStreamOfNumbers(): Observable<number> {
        return of(1, 12, 3, 6, 19, 9, 24);
    }

}

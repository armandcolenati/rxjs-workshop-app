import { Observable, OperatorFunction, concat, of } from 'rxjs';
import { catchError, distinctUntilChanged, mapTo } from 'rxjs/operators';

export function isPending(): OperatorFunction<unknown, boolean> {
    return (input$: Observable<unknown>) => concat(
        of(true),
        input$.pipe(mapTo(false), catchError(() => of(false))),
        of(false)
    ).pipe(distinctUntilChanged());
}

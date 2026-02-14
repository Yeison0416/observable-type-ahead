import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';

export function Form(onKeyUp: (value: string) => void) {
    const formInput = document.querySelector('[data="form-input"]') as HTMLInputElement;

    fromEvent(formInput, 'keyup')
        .pipe(
            debounceTime(200),
            map((event: Event) => (event.target as HTMLInputElement).value),
            distinctUntilChanged(),
            tap((_) => console.log(`API CALL at ${new Date()}`)),
        )
        .subscribe(onKeyUp);

    const state = {};

    return Object.assign({}, state);
}

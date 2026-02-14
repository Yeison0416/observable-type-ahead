import { BehaviorSubject } from 'rxjs';
import { TypeAheadState, TypeAheadStateStore } from '../types/type-ahead-types';

function createTypeAheadStateStore(typeAheadState: TypeAheadState): TypeAheadStateStore {
    const behaviorSubject = new BehaviorSubject<TypeAheadState>(typeAheadState);

    return {
        getState: (): TypeAheadState => behaviorSubject.getValue(),
        setState: (newState: Partial<TypeAheadState>): void => behaviorSubject.next({ ...behaviorSubject.getValue(), ...newState }),
        subscribe: (callback: (state: TypeAheadState) => void) => behaviorSubject.subscribe(callback),
    };
}

export const typeAheadStateStore = (initialState: TypeAheadState): TypeAheadStateStore => createTypeAheadStateStore({ ...initialState });

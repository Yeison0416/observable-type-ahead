import { TypeAheadState } from '../types/type-ahead-types';

export function initTypeAheadState(): TypeAheadState {
    return {
        continents: ['africa', 'asia', 'aurope', 'north America', 'south America', 'oceania', 'antarctica', 'australia'],
        searchTerm: [],
    };
}

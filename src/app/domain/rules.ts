import { Continents, SearchResults, TypeAheadState } from '../types/type-ahead-types';

export function initTypeAheadState(): TypeAheadState {
    return {
        continents: ['africa', 'asia', 'aurope', 'north America', 'south America', 'oceania', 'antarctica', 'australia'],
        searchResults: [],
        searchTerm: '',
    };
}

export function getContinents(continents: Continents, searchTerm: string): SearchResults {
    return continents.filter((continent) => continent.indexOf(searchTerm.toLowerCase()) > -1);
}

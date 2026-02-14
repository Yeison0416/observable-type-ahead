import template from './type-ahead.hbs';

import { Form } from './components/form/form';
import { SearchResult } from './components/search-result/search-result';

import { initTypeAheadState, getContinents } from './domain/rules';

import { typeAheadStateStore } from './state/type-ahead-state-store';

import { SearchTerm } from './types/type-ahead-types';

export function TypeAhead(appRootNode: HTMLElement) {
    // Render the template
    appRootNode.innerHTML = template();

    // Init state
    const initialState = initTypeAheadState();

    // Create the game state store
    const typeAheadStore = typeAheadStateStore(initialState);
    const continents = typeAheadStore.getState().continents;

    const onKeyUp = (searchTerm: SearchTerm) => {
        const searchResults = getContinents(continents, searchTerm);
        typeAheadStore.setState({ searchResults, searchTerm });
    };

    // Component Instances
    Form(onKeyUp);
    SearchResult(typeAheadStore);

    const state = {
        start() {
            console.log('aplication started');
        },
    };

    return Object.assign({}, state);
}

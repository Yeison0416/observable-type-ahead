import { TypeAheadStateStore } from '../../types/type-ahead-types';

export function SearchResult(typeAheadStore: TypeAheadStateStore) {
    const outputNode = document.querySelector("[data='search-result__output']") as HTMLElement;

    typeAheadStore.subscribe((state) => {
        outputNode.innerText = state.searchResults.join('\n');
    });

    const state = {};
    return Object.assign({}, state);
}

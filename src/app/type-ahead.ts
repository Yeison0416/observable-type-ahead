import template from './type-ahead.hbs';

import { Form } from './components/form/form';

import { initTypeAheadState } from './components/domain/rules';

import { typeAheadStateStore } from './state/type-ahead-state-store';

export function TypeAhead(appRootNode: HTMLElement) {
    // Render the template
    appRootNode.innerHTML = template();

    // Init state
    const initialState = initTypeAheadState();

    // Create the game state store
    const typeAheadStore = typeAheadStateStore(initialState);

    const onKeyUp = (value: string) => {
        console.log(value);
    };

    // Component Instances
    Form(onKeyUp);

    const state = {
        start() {
            console.log('aplication started');
        },
    };

    return Object.assign({}, state);
}

import template from './type-ahead.hbs';

export function TypeAhead(appRootNode: HTMLElement) {
    // Render the template
    appRootNode.innerHTML = template();

    const state = {
        start() {
            console.log('aplication started');
        },
    };

    return Object.assign({}, state);
}

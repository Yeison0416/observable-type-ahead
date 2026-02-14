import 'reset-css';
import './index.scss';

import { TypeAhead } from './app/type-ahead';

function App() {
    return {
        run() {
            const appRootNode: HTMLElement = document.getElementById('app-root') as HTMLElement;
            const typeAhead = TypeAhead(appRootNode);
            typeAhead.start();
        },
    };
}

const app = App();
app.run();

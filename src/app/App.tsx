import { AppRouter } from 'app/providers/router';

import './styles/main.scss';

export const App = () => {
    return (
        <main className="main">
            <AppRouter />
        </main>
    );
};

import { Provider } from 'react-redux';

import { store } from '../config/store';

import { IStoreProvider } from './StoreProvider.interface';

export const StoreProvider = (props: IStoreProvider) => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
};

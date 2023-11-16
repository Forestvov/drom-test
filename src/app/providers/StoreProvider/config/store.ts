import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { bookingReducer, bookingService } from 'pages/MainPage';

const rootReducer = combineReducers({
    bookingReducer: bookingReducer,
    [bookingService.reducerPath]: bookingService.reducer,
});

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(bookingService.middleware),
});

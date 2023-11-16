import type { store } from '../config/store';

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

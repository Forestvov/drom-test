import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootStore } from 'app/providers/StoreProvider';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useStateSelector: TypedUseSelectorHook<RootStore> = useSelector;

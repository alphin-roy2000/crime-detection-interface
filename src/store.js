
  import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { employeeApi } from './api';


export const store = configureStore({
    reducer: {
        [employeeApi.reducerPath] : employeeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(employeeApi.middleware),
})
setupListeners(store.dispatch);
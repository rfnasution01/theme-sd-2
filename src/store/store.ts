import { configureStore } from '@reduxjs/toolkit'

import { api } from './api'
import stateSearch from './reducer/stateSearch.ts'
import stateHalaman from './reducer/stateIdHalaman.tsx'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    stateSearch: stateSearch,
    stateHalaman: stateHalaman,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

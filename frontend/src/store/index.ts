import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../reducers/hero.reducer';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

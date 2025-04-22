import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../reducers/hero.reducer';

/**
 * Configura a store do Redux, incluindo os reducers e middleware.
 *
 * @returns {Store} A store configurada.
 */
export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/**
 * Tipo que representa o estado raiz da aplicação.
 *
 * @type {RootState} O tipo do estado completo da store.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Tipo que representa o dispatch da store.
 *
 * @type {AppDispatch} O tipo do dispatch da store.
 */
export type AppDispatch = typeof store.dispatch;

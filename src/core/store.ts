import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import productsSlice from '../features/ProductsList/productsSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsSlice
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

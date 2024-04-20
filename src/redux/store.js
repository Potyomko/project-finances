import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from "./auth/slice";
import { incomesReducer } from "./incomes/slice";
import { spendingsReducer } from "./spendings/slice";
import { balanceReducer } from "./balance/slice";

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
}

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    incomes: incomesReducer,
    spendings: spendingsReducer,
    balance: balanceReducer,
    auth: persistedAuthReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';
// import formWorldtoUaReducer from './formWorldtoUaSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   formWorldtoUa: formWorldtoUaReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true })

// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import formWorldtoUaReducer from './formWorldtoUaSlice';

const persistConfig = {
  key: 'root',
  storage,
  // Якщо потрібно, можна додати тут whitelist або blacklist
};

const rootReducer = combineReducers({
  formWorldtoUa: formWorldtoUaReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ігноруємо перевірку серіалізації для цієї дії
        ignoredPaths: ['formWorldtoUa.register'], // Можна додати конкретні шляхи в стейті, якщо там зберігаються функції
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

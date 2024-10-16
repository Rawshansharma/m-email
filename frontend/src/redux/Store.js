import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import appSlice from './AppSlice'


// 1. Persist config for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// 2. Wrap your reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, appSlice);


const store = configureStore({
    reducer:{
      app:appSlice,
      app: persistedReducer, // Use the persisted reducer

    }
});

const persistor = persistStore(store);

export { store, persistor };

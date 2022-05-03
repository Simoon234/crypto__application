import { configureStore} from '@reduxjs/toolkit';
import { cryptoNews } from '../service/newsApi';
import {cryptoApi} from "../service/cryptoApi";

export const store = configureStore({
  reducer: {
    [cryptoNews.reducerPath]: cryptoNews.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer
  },
});


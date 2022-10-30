import { combineReducers, configureStore } from '@reduxjs/toolkit';

import menuReducer from './menu';
import layoutReducer from './layout';

const store = configureStore({
  reducer: combineReducers({
    menu: menuReducer,
    layout: layoutReducer
  })
});

export default store;

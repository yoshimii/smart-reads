import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import monitorReducersEnhancer from './enhancers/monitorReducer.js';
import loggerMiddleware from './middleware/logger.js';
import reducer from './redux/reducers/reducer.js';

export default function configureAppStore(preloadedState) {
    const store = configureStore({
      reducer: reducer,
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState,
      enhancers: [monitorReducersEnhancer]
    })
    if (process.env.NODE_ENV !== 'production' && module.hot) {
      module.hot.accept('./reducers', () => store.replaceReducer(reducer))
    }
    return store
  }
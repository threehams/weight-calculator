import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { State } from './models';

declare var module: { hot: any };

const configureStore = (initialState?: State) => {
  const withMiddleware = applyMiddleware(thunk)(createStore);
  const withDevTools = window.devToolsExtension ? window.devToolsExtension()(withMiddleware) : withMiddleware;
  const store: Store<any> = withDevTools(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;

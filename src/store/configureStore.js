import {createStore, applyMiddleware} from 'redux';
import reducer from '../modules';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist'; 

/*
const middleWare = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);


export default configureStore = (onComplete) => {
  const store = autoRehydrate()(createStoreWithMiddleware)(reducer);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}; 
*/

export default configureStore = (onComplete) => {
  const store = createStore(reducer, applyMiddleware(thunk));
  onComplete();
  return store;
};


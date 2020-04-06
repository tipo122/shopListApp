import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers, { RootState } from './reducers';
import { Action } from 'redux-actions';
import epics from './epics';

import ToDo from './modules/ToDo';

//import './styles/index.scss';


//import * as serviceWorker from './serviceWorker';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
    }
}

const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const epicMiddleware = createEpicMiddleware<
    Action<any>,
    Action<any>,
    RootState
    >()

function configureStore(initialState?: RootState) {
    const middleware = [epicMiddleware]
    const enhancer = composeEnhancers(applyMiddleware(...middleware))
    return createStore(reducers, initialState, enhancer)
}

const store = configureStore()

epicMiddleware.run(epics as any)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <Switch>
                <Route path="/counter" component={ToDo} />
              </Switch>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

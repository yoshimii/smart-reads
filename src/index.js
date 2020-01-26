import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import configureStore from './configureStore.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import routes from './routes.js';

const store = configureStore();

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
        <Router>
    
        <App />
       
        {routes}
        </Router>
        </Provider>
        , document.getElementById('root'));
        
        if(process.env.NODE_ENV !== 'production' && module.hot) {
            module.hot.accept('./App', renderApp)
        }
}

renderApp()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

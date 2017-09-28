import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store/configureStore';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}></Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

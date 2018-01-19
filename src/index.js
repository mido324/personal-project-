import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
// import reducer from './store/reducer';

// const store = createStore(reducer);

const app = (
    <Provider >
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();

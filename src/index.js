import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import ErrorPage from './Component/Error';
import { Provider } from 'react-redux';
import { store } from './Store/store';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

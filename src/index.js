import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomeFunction from './Component/HomeFunction';
import HomeClass from './Component/HomeClass';
import ErrorPage from './Component/Error';
import DetailPage from './Component/DetailPageFunction';
// import DetailPage from './Component/DetailPageClass';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={HomeClass} />
            <Route path='/detail/:id' exact component={DetailPage} />
            <Route component={ErrorPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

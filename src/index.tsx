import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';

// Browser router inject required attributes.
// noinspection RequiredAttributes
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.querySelector('body')
);

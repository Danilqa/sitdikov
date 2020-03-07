import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app';

// Browser router inject required attributes.
// noinspection RequiredAttributes
ReactDOM.render(
    <App/>
    , document.getElementById('app')
);

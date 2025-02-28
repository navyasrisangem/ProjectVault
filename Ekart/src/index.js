import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap';
import { FetchHookDemo } from './components/hooks-demo/fetch-hook-demo';
import { SortHookDemo } from './components/hooks-demo/sort-hook-demo';
import { FilterHookDemo } from './components/hooks-demo/filter-hook-demo';
import { HookDemo } from './components/hooks-demo/hook-demo';
import { ContextDemo } from './components/hooks-demo/use-context-demo';
import { Fakestore } from './components/fakestore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <Fakestore />  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

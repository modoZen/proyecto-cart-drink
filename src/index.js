import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { StoreComponent } from "./store";
import './index.css'

ReactDOM.render(
<StoreComponent>
    <App />
</StoreComponent>, 
document.getElementById('app'));

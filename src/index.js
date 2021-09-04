import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store/store'
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
    <Provider store={store}>
        <ToastContainer/>
        <App />
    </Provider>,
  document.getElementById('root')
);

// -> Bu yerda App componenti Providerga o'rab olinadi va Providerni store qismiga reducerlar saqlanadigan store.js faylimizni beramiz
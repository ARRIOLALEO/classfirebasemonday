import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contex/GeneralAuthContext'
import FirestoreProvider from './contex/GeneralFireStore'
import CardProvider from './contex/GeneralCart'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider>
          <AuthProvider>
            <CardProvider>
            <BrowserRouter>
            <App />
            </BrowserRouter>
            </CardProvider>
          </AuthProvider>
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

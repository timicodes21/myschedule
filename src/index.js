import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const firebaseConfig = {
  apiKey: "AIzaSyAoqKl-PnMPhh53QLxEh42fNDt4fn1Br2c",
  authDomain: "myschedule-3454a.firebaseapp.com",
  projectId: "myschedule-3454a",
  storageBucket: "myschedule-3454a.appspot.com",
  messagingSenderId: "931961956437",
  appId: "1:931961956437:web:8305cafc58e486eecd4cdc"
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

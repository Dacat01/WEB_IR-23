import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './containers/App/App';   //Який імпортуєм з containers/App


//import App from './App';


ReactDOM.render(                   //Запускає додаток
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

/*САЙТ МАЄ БУТИ ПРО ЗООПАРКИ
ЯК У 3-5 ЛАБАХ
*/


/*
npx create-react-app "name"
npm install antd
*/






/*
React component

props vs state*/ 

//19.11 24:20 -  Conditional rendering приклад
//19.11 27:25 -  prop-types

//-----------
//19.11 - FETCH  16:10
//------------


//Conditional rendering

//Lifecycle methods
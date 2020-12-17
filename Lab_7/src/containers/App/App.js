//Зберігаються стандартні стилі Header, Footer і загального App.js

import React from "react";
import Layout from "./Layout/Layout";
import Footer from "./Footer/Footer";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <div>
      <Layout />
      <Navigation />
      <Footer />
    </div>
  );
};
  // 19.11
  //  22:00 MAIN <<--------------------


//19.11 BUTTONS 8:00 min 19:40    28:40- PROPTYPES  44:20 - USEEFFECT зМІНА КОМПОНЕНТУ
//12.11 states half video


export default App;


//Layout - Header
//Всі маніпуляції по лінкінгу на нашому додатку 
//Footer



/*  rcc 

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
*/
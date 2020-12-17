import React from "react";

// 7 лаба роутинг 23:26 
//14.11

import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
//бібліотека    react-router-dom
import { LinkingWrapper } from './Navigation.styles';

import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Contacts from '../Contacts/Contacts';

const Navigation = () => (
  //Обгораємо компонент в Router (для лінкування)
  // що є обраним - activeClassName
  // перехід - exact to 
  // Обгортаєм компоненти, які ми маєм відрендерити у  Switch
  

  // path "/" - рендериться компонент   "<Home />"
  // Решта - ще неготові -(рендеряться div)

  
  // exect -    ??



  <Router>  
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/shop" activeClassName="selected">Shop</NavLink>
        </li>



        <li>
          <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/shop">

        <Shop />

        </Route>


        <Route path="/contact">
          <Contacts/>

        </Route>
        <Route path="/">

          <Home />

        </Route>
      </Switch>
    </LinkingWrapper>
  </Router>
);

export default Navigation;

/*
<li>
<NavLink exact to="/blog" activeClassName="selected">Blog</NavLink>
</li>

<Route path="/blog">
<div>Hello it is blog</div>
</Route>
*/
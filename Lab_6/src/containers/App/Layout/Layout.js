import React from "react";


import { StyledHeader, IconsWrapper } from "./Layout.styles";
// Імпортуєм з Layout-styles

import {                  //8:38 Vidosa
  TwitterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  InstagramOutlined,
  FacebookOutlined,
//  AliwangwangOutlined,
  QqOutlined,
} from "@ant-design/icons";


const Layout = () => (

  // Обгортаємо. наприклад StyledHeader
  // З допомогою іконок відображаєм Header

  <StyledHeader title="Glay Shop">
    <div>
      <IconsWrapper>
        <QqOutlined />
      </IconsWrapper>
      <p>Pet Store</p>
    </div>

    <div>
      <IconsWrapper>
        <TwitterOutlined />

        <FacebookOutlined />

        <InstagramOutlined />
      </IconsWrapper>
    </div>

    <div>
      <IconsWrapper>
        <SearchOutlined />

        <ShoppingCartOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;
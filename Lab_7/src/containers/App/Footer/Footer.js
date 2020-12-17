// 9:50 vidosa

// ДО 23:15
// НАЗВА styled/styles.js

import React from "react";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
//    AliwangwangOutlined
    QqOutlined,
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconBase component={QqOutlined} />
        <h1>Pet Store</h1>
      </LogoWrapper>
      <p>Duis mollit eiusmod commodo laborum. <br />Exercitation duis sunt eiusmod ut cillum veniam do mollit commodo non in duis deserunt. <br />Eu ea sunt velit aliquip ea fugiat.</p>
      <VerticalLine />
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#FF0000'/>   
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={LinkedinOutlined} color='#007AB9'/>
          <IconBase component={InstagramOutlined} color='#FFC853'/>
      </IconsWrapper>
      <VerticalLine />
      <StyledText>© Pet Store all rights reserved</StyledText>
    </Wrapper>
  );
};

export default Footer;

//propsou peredaem color
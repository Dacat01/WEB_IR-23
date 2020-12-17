import React, {Component} from 'react';


import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "../../containers/Home/Home.styled";

export default class Button extends Component {

  renedr(){
      console.log("render");

    return(
      <StyledButton size="large" onClick={this.handleClick}>Show More</StyledButton>

    )
  }


 
}
                 
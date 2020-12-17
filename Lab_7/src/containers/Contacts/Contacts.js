import React from "react";

import {
  VerticalLine,
  FilterWrapper
} from "./Contacts.styled";



const Contacts = () => {
  return (
    <div>
       <VerticalLine/>  
        <FilterWrapper> 
      <p> +38 044 323-31-33 (Україна, Львів) </p>   
      <p> +38 067 000-14-67 (Kyivstar)  </p>
      <p> +38 050 325-64-38 (Vodafone) </p>
      <p> Пн-Cб: 9:00-19:00 </p>
      </FilterWrapper>
       <VerticalLine/>

    </div>
  );
};


export default Contacts;


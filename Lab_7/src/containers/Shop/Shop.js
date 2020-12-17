import React from "react";

import KittyPicture from "../../Icons/kitty.png";

import CatFood1 from "../../Icons/new/CatFood1.png";
import CatFood2 from "../../Icons/new/CatFood2.png";
import CatFood3 from "../../Icons/new/CatFood3.png";

import DogFood1 from "../../Icons/new/DogFood1.png";
import DogFood2 from "../../Icons/new/DogFood2.png";
import DogFood3 from "../../Icons/new/DogFood3.png";

import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  VerticalLine,
  StyledSelect,
  FilterWrapper
} from "./Shop.styled";


import CardShopItem from "../../components/CardItem/CardShopItem";



const dataKitties = [
  {
    title: "Kitties",
    text: "Adipisicing pariatur officia et proident excepteur adipisicing culpa dolore eu nulla non ullamco.",
    image: CatFood1,
    price: 150,
  },
  {
    title: "Kitties",
    text:
      "Adipisicing excepteur consequat cillum dolore. Ullamco aliquip commodo labore id.",
    image: CatFood2,
    price: 150,
  },
  {
    title: "Kitties",
    text:
      "Occaecat incididunt sint voluptate aliqua amet ea minim ipsum do.",
    image: CatFood3,
    price: 150,
  },

];

//-------------------------------------
const dataDoges = [
  {
    title: "Doges",
    text: "Adipisicing pariatur officia et proident excepteur adipisicing culpa dolore eu nulla non ullamco.",
    image: DogFood1,
    price: 250,
  },
  {
    title: "Doges",
    text:
      "Adipisicing excepteur consequat cillum dolore. Ullamco aliquip commodo labore id.",
    image: DogFood2,
    price: 250,
  },
  {
    title: "Doges",
    text:
      "Occaecat incididunt sint voluptate aliqua amet ea minim ipsum do.",
    image: DogFood3,
    price: 250,
  },

];

//  <StyledText> в одному контенті
/*
 <SectionWrapper>
        <StyledText>
          <h1>Find best things for your pets </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            scelerisque tristique neque, eget facilisis purus consequat sit
            amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
            eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
            Quisque sed tincidunt felis. Sed bibendum
          </p>
          <StyledButton size="large">Show More</StyledButton>
        </StyledText>
        <img src={KittyPicture} />
      </SectionWrapper>

*/



//--------------------->>
//  https://www.w3schools.com/tags/tag_select.asp


const Shop = () => {
  return (
    <div>
       <VerticalLine/>

       <FilterWrapper>

          <StyledSelect>
          <option value="Dogies">Kitties</option>
          <option value="Kitties">Dogies</option>
          <option value="Birds">Birds</option>
          </StyledSelect>

          <StyledButton size="large">Apply</StyledButton>
          
       </FilterWrapper>

       <VerticalLine/>

      <CardWrapper>
        {dataKitties.map(({ title, text, image, price }, idx) => (
          <CardShopItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>

      
    </div>
  );
};

//Проходимся по масиву "data.map", за допомогою деструктуризації витягуєм 
//значення і порядковий номер  кожного з елементів


export default Shop;


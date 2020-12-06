import React from "react";

import KittyPicture from "../../Icons/kitty.png";
import ImageModel1 from "../../Icons/image_doge.png";
import ImageModel2 from "../../Icons/image_kitty.png";
import ImageModel3 from "../../Icons/image_parrot.png";

import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "./Home.styled";

import CardItem from "../../components/CardItem/CardItem";


const data = [
  {
    title: "Food, treats & goods for dogies",
    text: "Adipisicing pariatur officia et proident excepteur adipisicing culpa dolore eu nulla non ullamco.",
    image: ImageModel1,
  },
  {
    title: "Food, treats & goods for kitties",
    text:
      "Adipisicing excepteur consequat cillum dolore. Ullamco aliquip commodo labore id.",
    image: ImageModel2,
  },
  {
    title: "Food, treats & goods for birds",
    text:
      "Occaecat incididunt sint voluptate aliqua amet ea minim ipsum do.",
    image: ImageModel3,
  },
];

const Home = () => {
  return (
    <div>
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
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            id={idx}
          />
        ))}
      </CardWrapper>
    </div>
  );
};



export default Home;
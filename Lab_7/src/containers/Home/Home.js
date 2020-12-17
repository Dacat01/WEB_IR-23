import React, {useState, useEffect} from "react";

import {Select, Input, Checkbox, Rate} from "antd";
import PropTypes from "prop-types";


import KittyPicture from "../../Icons/kitty.png";
import ImageModel1 from "../../Icons/image_doge.png";
import ImageModel2 from "../../Icons/image_kitty.png";
import ImageModel3 from "../../Icons/image_parrot.png";


import Shop from '../Shop/Shop';

//import {AddTripButton} from "./Button"

import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "./Home.styled";

import CardItem from "../../components/CardItem/CardItem";

//import Button from "../../components/Button/Button";

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


const {Option} = Select;


  



//  <StyledText> в одному контенті
const Home = () => {

//  const Catalog = ({name, LinkToReport,dataflow}) =>{
    
  const [count, setCount] = useState(0);

  const [ButtonState, setState] = useState("false");


  const [ButtonState1, setState1] = useState(false);

  const [ButtonName, setName] = useState("Show more");



    const [enableRating,setRating] = React.useState(false);
    const [enablePost,setPosts] = React.useState(false);
    const isNumber = false;
    const [todo,setTodo] = useState();
 /* 
    useEffect(() =>{
      document.title = `Clicked ${count} times`
    });
  }
*/
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

          <StyledButton size="large" onClick={() => setState1(true)}> {ButtonName} </StyledButton>

        
         </StyledText>
        <img src={KittyPicture} />
      </SectionWrapper>


      {ButtonState1? (
                        <CardWrapper>
                        {data.map(({ title, text, image }, idx) => (
                          <CardItem 
                            title={title}
                            text={text}
                            imageSrc={image}
                            id={idx}
                          />
                        ))}
                   
                      </CardWrapper>

          ): 
          (
          <div>   </div>
           
          )}


{ButtonState1? (
                        <CardWrapper>
                        {data.map(({ title, text, image }, idx) => (
                          <CardItem 
                            title={title}
                            text={text}
                            imageSrc={image}
                            id={idx}
                          />
                        ))}
                   
                      </CardWrapper>

          ): 
          (
          <div>   </div>
           
          )}

      <CardWrapper>
        {data.map(({ title, text, image }, idx) => (
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

/*
function handleClick(e) {
  e.preventDefault();
  console.log('Посилання було натиснуте.');
}

*/
const AddButton = props => {
  return  <StyledButton size="large" >Show More</StyledButton>
}




/*
Catalog.PropTypes ={
  name: PropTypes.string,
  LinkToReport: PropTypes.string,
  dataflow: PropTypes.array,
}
*/


/*
componentDidMount => {
  this.state = {
    show: false
  };
}

showTable=> {
  this.setState({
    show: true
  });
}


/*
 const buttonClicked() => {
  console.log('Button was clicked!')
}

/*
const displayQuestion = () => {
  this.setState({
      displayQuestions: !this.state.displayQuestions
  })
}

<div>
{questions}
</div>


const state = {
  questions: [
     { id: 'fdsd', title: 'Why is the sky blue?' },
     { id: 'adsf', title: 'Who invented pizza?' },
     { id: 'afdsf', title: 'Is green tea overrated?' },
  ],
     displayQuestions: false
}
*/

//Проходимся по масиву "data.map", за допомогою деструктуризації витягуєм 
//значення і порядковий номер  кожного з елементів


export default Home;





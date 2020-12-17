import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";

const { Meta } = Card;

// Card і Button з бібліотеки antdesign
// 
//Отриуєм 4 елементи, які необхідні для візуалізації CARD

const CardShopItem = ({ title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable // hoverable={true}
    
              // Якось винести оце що знизу у styled component 34:40
    style={{ width: 350, borderRadius: "20px" }}
    cover={
      <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
       <p>${price}</p>
       <Button>Show Info</Button>
    </Footer>
  </Card>
);

export default CardShopItem;


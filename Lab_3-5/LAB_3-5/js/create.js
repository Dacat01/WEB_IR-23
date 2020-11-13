const titleInput = document.getElementById("title_input");
const visitorsInput = document.getElementById("visitors_input");
const animalsInput = document.getElementById("animals_input");


const submitButton = document.getElementById("submit_button");

import {
  postZoo,
} from "./api.js";


submitButton.addEventListener('click', async(event) => {
 
    event.preventDefault();

    const { title, visitors, animals } = getInputValues();
    
    
   if(isNaN(parseInt( title))==false)
    alert("Введіть назву зоопарку (Не може складатися тільки з чисел)");
  else if (isNaN(parseInt(visitors)))
    alert("Введіть кількість відвідувачів (число)");
  else if (isNaN(parseInt(animals)))
    alert("Введіть кількість тварин (число)");
  else
  {
    clearInputs();

    const generatedId = uuid.v1(); 
    const body = {
      id: generatedId,
      title,
      visitors,
      animals,
    };
  postZoo(body);
   
  }
    
});


const getInputValues = () => {
    return {
      title: titleInput.value,
      visitors: visitorsInput.value,
      animals: animalsInput.value,
    };
  };

 const clearInputs = () => {
    titleInput.value = "";
    animalsInput.value = "";
    visitorsInput.value = "";
  };

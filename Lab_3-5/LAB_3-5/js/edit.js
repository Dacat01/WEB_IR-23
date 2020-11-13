const titleInput = document.getElementById("title_input");
const visitorsInput = document.getElementById("visitors_input");
const animalsInput = document.getElementById("animals_input");

const editButton = document.getElementById("edit_button");


import {
  updateZoo,
} from "./api.js";



editButton.addEventListener('click', async(event) => {
 
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
     const body = {
      title,
      visitors,
      animals,
    };
 
     updateZoo(body);
     clearInputs(); 
     window.location.href = "http://127.0.0.1:5501/";
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
  
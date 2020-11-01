import {
  addItemToPage,
  clearInputs,
  renderItemsList,
  getInputValues,
  countValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

const countOutput = document.getElementById("count_output");
const countButton = document.getElementById("count_button");
const sortButton = document.getElementById("sort_button");


let zoo = [];



const addItem = ({title,visitors,animals }) => {
  const generatedId = uuid.v1();          //генерація ідшки

  const newItem = {
    id: generatedId,
    title,
    visitors,
    animals,
  };

  zoo.push(newItem);

  addItemToPage(newItem);
};


submitButton.addEventListener("click", (event) => {
  // Prevents default page reload on submit
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
    addItem({
      title,
      visitors,
      animals,
    });
  }
});

findButton.addEventListener("click", () => {
  const foundZoo= zoo.filter(zoo => zoo.title.search(findInput.value) !== -1);

  renderItemsList(foundZoo);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(zoo);

  findInput.value = "";
})


countButton.addEventListener("click", () => {

    var a=0;

    for (var i=0;i<zoo.length;i++) {
      a=a+parseInt(zoo[i].animals);
    }

  countOutput.value=a;

})

sortButton.addEventListener("click", () => {

  var n=zoo.length;
 
  for (var i = 0; i < n-1; i++) 
      for (var j = 0; j < n-i-1; j++) 
          if (parseInt(zoo[j].animals) > parseInt(zoo[j+1].animals)) 
          { 
              var temp = zoo[j]; 
              zoo[j] = zoo[j+1]; 
              zoo[j+1] = temp; 
          } 

  renderItemsList(zoo);
  
})


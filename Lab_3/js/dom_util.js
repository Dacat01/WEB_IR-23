
export const EDIT_BUTTON_PREFIX = 'edit-button-';

const titleInput = document.getElementById("title_input");
const visitorsInput = document.getElementById("visitors_input");
const animalsInput = document.getElementById("animals_input");
const itemsContainer = document.getElementById("items_container");

// local functions
const getItemId = (id) => `item-${id}`;

/* TEMPLATE STRING*/

 const itemTemplate = ({ id, title, visitors,animals}) => `       
<li id="${getItemId(id)}" class="card mb-3 item-card"">
  <img
    src="images/zoo.png""
    class="item-container__image card-img-top" alt="zoo">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">visitors quntity: ${visitors}</p>
    <p class="card-text">animals quntity: ${animals}</p>
  </div>
</li>`;

// exposed functions
export const clearInputs = () => {
  titleInput.value = "";
  animalsInput.value = "";
  visitorsInput.value = "";
};

export const addItemToPage = ({ id, title, visitors,animals }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, visitors,animals })
  );
};

/* ВИТЯГУВАННЯ ДАНИХ З БЕКЕНДУ*/
 export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};
/*-----------*/ 

export const getInputValues = () => {
  return {
    title: titleInput.value,
    visitors: visitorsInput.value,
    animals: animalsInput.value,
  };
};

export const countValues = ({ id, title, visitors,animals }) => {
  
  /*return zoo.animals.reduce((total, amount) => total + amount); 
*/


/*
    const a;
    for (const animal of animals){

      a+= animals
    }
    return{
    countOutput.value=a;
    };
*/

};

import {
  deleteZoo,postZoo
} from "./api.js";

import {
  refetchAllZoos
} from "./index.js";

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

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
    <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="btn btn-info">
    Delete
  </button>
    <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="btn btn-info">
    Edit
  </button>
  </div>
</li>`;


export const addItemToPage = ({ _id: id, title, visitors,animals }) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, title, visitors,animals })
  );

const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

editButton.addEventListener("click",  () => {
    postZoo({"id":`${id}`});
  
  window.location.href = "http://127.0.0.1:5501/edit.html";
});

deleteButton.addEventListener("click", (event) => {
  event.preventDefault();

  deleteZoo(id).then(refetchAllZoos);
});
};

 export const renderItemsList = (items) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item);
  }
};

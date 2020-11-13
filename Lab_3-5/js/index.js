import {
  renderItemsList,
} from "./dom_util.js";

import {
  getAllZoos,
} from "./api.js";

const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");

const countOutput = document.getElementById("count_output");
const countButton = document.getElementById("count_button");
const sortButton = document.getElementById("sort_button");

let zoo = [];


export const refetchAllZoos = async () => {
  const allZoos =   await getAllZoos('');
  zoo = allZoos;

  renderItemsList(zoo);
}


findButton.addEventListener("click", () => {
  const foundZoo= zoo.filter(zoo => zoo.title.search(findInput.value) !== -1);

  renderItemsList(foundZoo);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(zoo);

  findInput.value = "";
})


countButton.addEventListener("click", () => {

  const counter = zoo.reduce(
    (acc,value) => (parseInt(acc) + parseInt(value.animals)),0);

  countOutput.value=counter;

})

sortButton.addEventListener("click", () => {

  zoo.sort((a, b) => (parseInt(a.animals) > parseInt(b.animals)) ? 1 : -1);
  renderItemsList(zoo);

})

refetchAllZoos();


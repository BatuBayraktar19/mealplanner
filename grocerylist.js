let shoppinglist = ["rice", "chicken", "salmon"];
let pantrylist = ["noodles", "cookies"];
const lists = ["shoppinglist", "pantrylist"];
let currentlist = shoppinglist;
let inactivelist = pantrylist;
let selected = [];
let deadline;

function init() {
  if (currentlist == shoppinglist) {
    renderList(shoppinglist);
  } else {
    renderList(pantrylist);
  }
}

function renderList() {
  document.getElementById("list").innerHTML = "";
  currentlist.forEach((el) => {
    document.getElementById("list").innerHTML += `
          <li>
            <input type="checkbox" name="${el}" id="${el}" onclick="onCheckboxChecked('${el}')"/>
            <label for="${el}">${el}</label>
          </li>
      `;
  });
}

function addToList(el, list) {
  list.push(el);
}

function removeFromList(el, list) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}

function toggleList(list, newlist, prevlist) {
  document.getElementById(newlist).classList.add("selected");
  document.getElementById(prevlist).classList.remove("selected");
  currentlist = list;
  inactivelist = currentlist === shoppinglist ? pantrylist : shoppinglist;
  renderList();
}

function addItem() {
  const input = document.getElementById("newItem");
  addToList(input.value, currentlist);
  input.value = "";
  renderList();
}

function onCheckboxChecked(el) {
  console.log("el", el);

  selected.push(document.getElementById(el));
  deadline = Date.now() + 1500;

  while (Date.now() < deadline);

  selected.forEach((el) => {});

  for (let i = 0; i < selected.length; i++) {
    const el = selected[i];
  }

  document.getElementById(el).checked;
  removeFromList(el, currentlist);
  addToList(el, inactivelist);
  renderList();
}

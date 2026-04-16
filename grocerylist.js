let shoppinglist = ["rice", "chicken", "salmon"];
let pantrylist = ["noodles", "cookies"];
const lists = ["shoppinglist", "pantrylist"];
let currentlist = shoppinglist;

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
            <input type="checkbox" name="${el}" id="${el}" onclick="handleCheck('${el}')"/>
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
  renderList();
}

function handleCheck(el) {
  const inactivelist = currentlist === shoppinglist ? pantrylist : shoppinglist;

  setTimeout(() => {
    if (document.getElementById(el) && document.getElementById(el).checked) {
      removeFromList(el, currentlist);
      addToList(el, inactivelist);
      renderList();
    }
  }, 1500);
}

function addItem() {
  const input = document.getElementById("newItem");
  addToList(input.value, currentlist);
  input.value = "";
  renderList();
}

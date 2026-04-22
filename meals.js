let meals = [
    {
    title: "Lachsfilet",
    ingredients: ["200g Lachs", "Butter", "Salz"],
    image: null,
  },
  {
    title: "Riceporridge",
    ingredients: ["Reis", "Wasser"],
    image: null,
  },
  {
    title: "Döner",
    ingredients: ["macht schöner"],
    image: "assets/img/meals/Döner.jpg",
  },
];

const mealBrowser = ["Lasagne", "Pizza - Quattro Fromaggi", "Reis mit hähnchen", "Nudeln mit Pesto"];
let recipes = meals;

function init() {
  renderRecipes();
}

function renderRecipes() {
  const container = document.getElementById("list");
  container.innerHTML = "";

  recipes.forEach((meal) => {
    let ingredientsHTML = "";

    meal.ingredients.forEach((ing) => {
      ingredientsHTML += `<span>-${ing}</span>`;
    });

    if (meal.image) {
      container.innerHTML += `
        <div class="meal">
          <img src="${meal.image}" class="mealboximg" />
          <div class="displayFlex">
            <h2>${meal.title}</h2>
            ${ingredientsHTML}
          </div>
        </div>
      `;
    } else {
      container.innerHTML += `
        <div class="meal">
          <h2>${meal.title}</h2>
          ${ingredientsHTML}
        </div>
      `;
    }
  });
}

function renderMealBrowser() {
  const container = document.getElementById("list");
  container.innerHTML = "";

  mealBrowser.forEach((meal) => {
    container.innerHTML += `
      <div class="meal">
        <h2>${meal}</h2>
      </div>
    `;
  });
}

function toggleList(list) {
  document.getElementById("recipes").classList.remove("selected");
  document.getElementById("mealbrowser").classList.remove("selected");

  document.getElementById(list).classList.add("selected");

  if (list === "recipes") {
    renderRecipes();
  } else {
    renderMealBrowser();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderRecipes();
  document.getElementById("recipes").addEventListener("click", () => toggleList("recipes"));
  document.getElementById("mealbrowser").addEventListener("click", () => toggleList("mealbrowser"));
});
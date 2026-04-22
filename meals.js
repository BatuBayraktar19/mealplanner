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
let recipes = meals;

let mealBrowser = [
  {
    title: "Lasagne",
    ingredients: ["Lasagne"],
    image: null,
  },
  {
    title: "Pizza - Quattro Fromaggi",
    ingredients: ["Teig"],
    image: null,
  },
  {
    title: "Reis mit hähnchen",
    ingredients: ["Reis", "Hähnchen"],
    image: "",
  },
  {
    title: "Nudeln mit Pesto",
    ingredients: ["Nudeln", "Pesto"],
    image: "",
  },
];

let OnlineMeals = mealBrowser;

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
  container.innerHTML = "";  // Container leeren, bevor neue Inhalte hinzugefügt werden

  OnlineMeals.forEach((meal) => {
    let ingredientsHTML = "";

    meal.ingredients.forEach((ing) => {
      ingredientsHTML += `<span>-${ing}</span>`;  // Zutaten hinzufügen
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
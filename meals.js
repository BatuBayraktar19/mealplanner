let recipes = [
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

function renderList(list) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  list.forEach((meal) => {
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

function toggleList(list) {
  document.getElementById("recipes").classList.remove("selected");
  document.getElementById("mealbrowser").classList.remove("selected");

  document.getElementById(list).classList.add("selected");

  if (list === "recipes") {
    renderList(recipes);
  } else {
    renderList(mealBrowser);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderList(recipes);
  document.getElementById("recipes").addEventListener("click", () => toggleList("recipes"));
  document.getElementById("mealbrowser").addEventListener("click", () => toggleList("mealbrowser"));
});
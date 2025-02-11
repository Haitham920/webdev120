const recipeForm = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");

let recipes = [
  {
    title: "Title recipe 1",
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3","ingredient 4"],
    instructions: "instruction1, instruction2, instruction3, instruction4"
  },
  {
    title: "Title recipe 2",
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3","ingredient 4"],
    instructions: "instruction1, instruction2, instruction3, instruction4"
  },
];

function displayRecipes() {
  recipeList.innerHTML = ""; 

  for (let i = 0; i < recipes.length; i++) {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipes[i].title;

    const recipeIngredients = document.createElement("p");
    recipeIngredients.textContent = "Ingredients: " + recipes[i].ingredients;

    const recipeInstructions = document.createElement("p");
    recipeInstructions.textContent = "Instructions: " + recipes[i].instructions;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("data-index", i);
    deleteButton.addEventListener("click", deleteRecipe); 
  
    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(recipeIngredients);
    recipeCard.appendChild(recipeInstructions);
    recipeCard.appendChild(deleteButton);
    recipeList.appendChild(recipeCard);
  }
}

function addRecipe(event) {
  event.preventDefault(); 
  
  const title = document.getElementById("title").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const instructions = document.getElementById("instructions").value.trim();

  if (title && ingredients && instructions) {
    recipes.push({
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    });
    displayRecipes();
    recipeForm.reset();
  } 
  else {
    alert("Please fill out all fields!");
  }
}

function deleteRecipe(event) {
  const index = event.target.getAttribute("data-index"); 
  recipes.splice(index, 1); 
  displayRecipes(); 
}

recipeForm.addEventListener("submit", addRecipe);
displayRecipes();


// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
  .then((value) => value.json())
  .then((recipesBook) => {
      const {recipes} = recipesBook;
    console.log(recipes);

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>${recipe.instructions}</p>
            <p>${recipe.ingredients}</p>`;

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        recipeElement.appendChild(ingredientsList);
        recipeElement.innerHTML += `<hr>`;

        recipesDiv.appendChild(recipeElement);
    })
  });
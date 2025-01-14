document.addEventListener('DOMContentLoaded', () => {

    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');


    recipeForm.addEventListener('submit', (e) => {

        e.preventDefault();
        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('recipe-ingredients').value;
        const instructions = document.getElementById('recipe-instructions').value;


        addRecipe(name, ingredients, instructions);
        recipeForm.reset();


    });

    function addRecipe(name, ingredients, instructions) {
        const recipe = document.createElement('div');
        recipe.classList.add('recipe');


        recipe.innerHTML = `

<h2>${name}</h2>
<p><strong>Ingredients: </strong> ${ingredients}</p>
<p><strong>Instructions: </strong> ${instructions}</p>
<button onclick="deleteRecipe(this)"> Delete Recipe </button>

`;

        recipeList.appendChild(recipe);

    }


    window.deleteRecipe = function (button) {
        const recipe = button.parentElement;
        recipeList.removeChild(recipe);
    }


});
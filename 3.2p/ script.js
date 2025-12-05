// Wait for Materialize to initialize
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch recipe data from the server
    const response = await fetch('http://localhost:3000/api/recipes');
    const recipes = await response.json();

    // Get the container for recipe cards
    const recipeContainer = document.getElementById('recipe-container');

    // Render each recipe as a Materialize card
    recipes.forEach(recipe => {
      const card = `
        <div class="col s12 m6 l4">
          <div class="card hoverable">
            <div class="card-image">
              <img src="${recipe.image}" alt="${recipe.title}">
              <span class="card-title white-text text-shadow">${recipe.title}</span>
            </div>
            <div class="card-content">
              <p>${recipe.description}</p>
              <div class="row no-margin">
                <div class="col s6">
                  <i class="material-icons teal-text">timer</i> ${recipe.prepTime}
                </div>
                <div class="col s6">
                  <i class="material-icons teal-text">people</i> ${recipe.servings} servings
                </div>
              </div>
            </div>
            <div class="card-action">
              <a href="#" class="teal-text text-darken-2">View Recipe</a>
            </div>
          </div>
        </div>
      `;
      recipeContainer.innerHTML += card;
    });

    // Initialize Materialize components (if needed)
    M.AutoInit();

  } catch (error) {
    console.error('Error fetching recipes:', error);
    recipeContainer.innerHTML = `<p class="center-align red-text">Failed to load recipes 😞</p>`;
  }
});

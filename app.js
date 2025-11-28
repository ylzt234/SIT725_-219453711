const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for client-side access
app.use(cors());

// Sample recipe data (replace with your own!)
const recipes = [
  {
    id: 1,
    title: "Veggie Pasta Primavera",
    description: "Fresh pasta with seasonal vegetables and garlic olive oil",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop",
    prepTime: "15 mins",
    servings: 4
  },
  {
    id: 2,
    title: "Chocolate Chip Banana Bread",
    description: "Moist banana bread with melty chocolate chips",
    image: "https://images.unsplash.com/photo-1559656914-a30970c1affd?w=500&auto=format&fit=crop",
    prepTime: "20 mins",
    servings: 8
  },
  {
    id: 3,
    title: "Grilled Chicken Caesar Salad",
    description: "Classic Caesar salad with grilled chicken and homemade dressing",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
    prepTime: "10 mins",
    servings: 2
  }
];

// GET API endpoint for recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
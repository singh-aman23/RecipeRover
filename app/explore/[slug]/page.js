import Navbar from '@/components/navbar'
import classes from './page.module.css'

export default function MealDetails({params}){
    const mealData = {
        image: 'https://source.unsplash.com/500x300/?food',
        name: 'Spaghetti Bolognese',
        ingredients: 'Spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic, Olive Oil, Basil, Parmesan Cheese',
        instructions: 'Boil spaghetti. Sauté onions and garlic in olive oil. Add ground beef and cook until browned. Add tomato sauce and basil, then simmer for 15 minutes. Serve with spaghetti and sprinkle with parmesan cheese.',
        cookingTime: 30, // in minutes
        servings: 4,
        difficulty: 'Medium',
        category: 'Lunch',
        dishType: 'Non-Vegetarian',
      };
    return <>
    <Navbar/>
    <div className={classes.mealDetails}>
      <img src='/logo.png' alt={mealData.name} className={classes.mealImage} />
      <h2 className={classes.mealName}>{mealData.name}</h2>
      <div className={classes.mealInfo}>
        <p><strong>Category:</strong> {mealData.category}</p>
        <p><strong>Dish Type:</strong> {mealData.dishType}</p>
        <p><strong>Cooking Time:</strong> {mealData.cookingTime} minutes</p>
        <p><strong>Servings:</strong> {mealData.servings}</p>
        <p><strong>Difficulty Level:</strong> {mealData.difficulty}</p>
      </div>
      <div className={classes.mealIngredients}>
          <h3>Ingredients</h3>
          <p>{mealData.ingredients}</p> {/* Render ingredients as a string */}
        </div>
      <div className={classes.mealInstructions}>
        <h3>Instructions</h3>
        <p>{mealData.instructions}</p>
      </div>
      <div className={classes.recipeBy}>
          <p>Recipe by: <strong>Aman</strong></p>
        </div>
    </div>
    </>
}
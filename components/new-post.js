import classes from "./new-post.module.css";
export default function NewPostForm() {
  return (
    <>
      <form className={classes.recipeForm}>
        <h2>Share Your Recipe</h2>

        <label htmlFor="dishName">Dish Name</label>
        <input type="text" id="dishName" name="dishName" required />

        <label htmlFor="ingredients">Ingredients</label>
        <textarea id="ingredients" name="ingredients" rows="4" required />

        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" rows="6" required />

        <label htmlFor="cookingTime">Cooking Time (in minutes)</label>
        <input type="number" id="cookingTime" name="cookingTime" required />

        <label htmlFor="servings">Servings</label>
        <input type="number" id="servings" name="servings" required />

        <label htmlFor="difficulty">Difficulty Level</label>
        <select id="difficulty" name="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="dessert">Snacks</option>
        </select>

        <label htmlFor="dishType">Dish Type</label>
        <select id="dishType" name="dishType" required>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>

        <label htmlFor="image">Recipe Image</label>
        <input type="file" id="image" name="image" accept="image/*" />

        <button className={classes.submitButton}>Submit Recipe</button>
      </form>
    </>
  );
}

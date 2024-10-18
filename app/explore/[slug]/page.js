import Navbar from "@/components/navbar";
import classes from "./page.module.css";

async function getPostById(id) {
  try {
    const postSearch = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    
    if(!postSearch.ok){
      throw new Error("Failed to fetch post");
    }

    const {post} = await postSearch.json();
    return post;
  } catch (error) {
    console.log("Error while fetching details: ", error);
    return null;
  }
}

export default async function MealDetails({ params }) {
  const post = await getPostById(params.slug);
  if(!post){
    return <p>Error loading post details</p>
  }
  return (
    <>
      <Navbar />
      <div className={classes.mealDetails}>
        <img
          src={post.image}
          alt={post.dishName}
          className={classes.mealImage}
        />
        <h2 className={classes.mealName}>{post.dishName}</h2>
        <div className={classes.mealInfo}>
          <p>
            <strong>Category:</strong> {post.category}
          </p>
          <p>
            <strong>Dish Type:</strong> {post.dishType}
          </p>
          <p>
            <strong>Cooking Time:</strong> {post.cookingTime} minutes
          </p>
          <p>
            <strong>Servings:</strong> {post.servings}
          </p>
          <p>
            <strong>Difficulty Level:</strong> {post.difficulty}
          </p>
        </div>
        <div className={classes.mealIngredients}>
          <h3>Ingredients</h3>
          <p>{post.ingredients}</p> 
        </div>
        <div className={classes.mealInstructions}>
          <h3>Instructions</h3>
          <p>{post.instructions}</p>
        </div>
        <div className={classes.recipeBy}>
          <p>
            Recipe by: <strong>{post.userName}</strong>
          </p>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import classes from "./new-post.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewPostForm() {
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const router = useRouter();
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (
        !formData.get("dishName") ||
        !formData.get("ingredients") ||
        !formData.get("instructions") ||
        !formData.get("cookingTime") ||
        !formData.get("servings") ||
        !formData.get("difficulty") ||
        !formData.get("category") ||
        !formData.get("dishType")
      ) {
        setError("All fields are mandatory");
        return;
      }

      if (!result.url) {
        setError("Please upload image of the dish");
        return;
      }

      if (response.ok) {
        const postDetails = {
          dishName: formData.get("dishName"),
          ingredients: formData.get("ingredients"),
          instructions: formData.get("instructions"),
          cookingTime: formData.get("cookingTime"),
          servings: formData.get("servings"),
          difficulty: formData.get("difficulty"),
          category: formData.get("category"),
          dishType: formData.get("dishType"),
          userEmail: userEmail,
          userName: userName,
          image : result.url
        };

        const postResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postDetails),
          }
        );

        const postResult = await postResponse.json();
        if (postResponse.ok) {
          console.log("Post created successfully: ", postResult);
          router.push("/dashboard");
        } else {
          console.error("Post creation failed", postResult.error);
        }
      }
    } catch (error) {
      console.error("error : ", error);
    }
  };

  return (
    <>
      <form className={classes.recipeForm} onSubmit={handleSubmit}>
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
          <option value="snacks">Snacks</option>
        </select>

        <label htmlFor="dishType">Dish Type</label>
        <select id="dishType" name="dishType" required>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>

        <label htmlFor="image">Recipe Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
        />
        {error && <p className = {classes.error}>{error}</p>}
        <button className={classes.submitButton}>Submit Recipe</button>
      </form>
    </>
  );
}

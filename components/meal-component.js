import classes from "./meal-component.module.css";
import Link from "next/link";
export default function MealCard({ image, mealName }) {
  return (
    <div className={classes.mealCard}>
      <img src={image} alt={mealName} className={classes.mealImage} />
      <h2 className={classes.mealName}>{mealName}</h2>
      <Link href="/explore/123">
        <button className={classes.viewDetailsButton}>View Details</button>
      </Link>
    </div>
  );
}

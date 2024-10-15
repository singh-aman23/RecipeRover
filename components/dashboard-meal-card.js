import { FaTrashAlt } from "react-icons/fa";
import classes from "./dashboard-meal-card.module.css";
import Link from "next/link";

export default function DashboardMealCard({ image, mealName }) {
  return (
    <div className={classes.mealCard}>
      <img src={image} alt={mealName} className={classes.mealImage} />
      <h2 className={classes.mealName}>{mealName}</h2>
      <div className={classes.buttonGroup}>
        <Link href="/explore/123">
          <button className={classes.viewDetailsButton}>View Details</button>
        </Link>
        <button className={classes.deleteButton}>
          <FaTrashAlt className={classes.deleteIcon} />
        </button>
      </div>
    </div>
  );
}

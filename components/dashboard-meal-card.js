'use client';
import { FaTrashAlt } from "react-icons/fa";
import classes from "./dashboard-meal-card.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardMealCard({post}) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if(!confirmed){
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        method : "DELETE",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({id : post._id})
      });
      if(res.ok){
        router.push("/explore");
      }else{
        const errorData = await res.json(); 
      console.error('Failed to delete post:', errorData);
      alert("Failed to delete this post");
      }
    } catch (error) {
      console.log("error: ", error);
      alert("An error occured while deleting the post");
    }
  }
  return (
    <div className={classes.mealCard}>
      <img src={post.image} alt={post.dishName} className={classes.mealImage} />
      <h2 className={classes.mealName}>{post.dishName}</h2>
      <div className={classes.buttonGroup}>
        <Link href={`/explore/${post._id}`}>
          <button className={classes.viewDetailsButton}>View Details</button>
        </Link>
        <button className={classes.deleteButton} onClick = {handleDelete}>
          <FaTrashAlt className={classes.deleteIcon} />
        </button>
      </div>
    </div>
  );
}

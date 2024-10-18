import classes from "./dashboard-post-grid.module.css";
import DashboardMealCard from "./dashboard-meal-card";

export default function DashboardPostGrid({ posts }) {
  return (
    <>
      <div className={classes.container}>
        {posts.length > 0 ? (
          posts.map((post) => <DashboardMealCard key={post._id} post={post} />)
        ) : (
          <p>No post found</p>
        )}
      </div>
    </>
  );
}

import classes from './post-grid.module.css';
import MealCard from './meal-component';

export default function PostGrid({posts}){
  if(posts.length === 0){
    return <p>No posts available...</p>
  }
    return <>
         <div className={classes.container}>
        {posts.map(post => (<MealCard key = {post._id} image = {post.image} mealName = {post.dishName} slug = {post._id}/>))}
      </div>
    </>
}
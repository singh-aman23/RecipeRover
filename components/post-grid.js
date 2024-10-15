import classes from './post-grid.module.css';
import MealCard from './meal-component';

export default function PostGrid(){
    return <>
         <div className={classes.container}>
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png"
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <MealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
      </div>
    </>
}
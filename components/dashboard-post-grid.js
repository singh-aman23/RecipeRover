import classes from './dashboard-post-grid.module.css'
import DashboardMealCard from './dashboard-meal-card'

export default function DashboardPostGrid(){
    return <>
        <div className = {classes.container}>
        <DashboardMealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <DashboardMealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <DashboardMealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <DashboardMealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />
        <DashboardMealCard
          image="/logo.png" 
          mealName="Spaghetti Bolognese"
        />

        </div>
    </>
}
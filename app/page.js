import Link from "next/link";
import classes from "./page.module.css";

export default function HomePage() {
  return (
    <div className={classes.container}>
      <img src="/logo.png" alt="Recipe Rover Logo" className={classes.image} />
      <h1 className={classes.title}>Welcome to Recipe Rover</h1>
      <p className={classes.description}>
        Discover delicious recipes from around the world! Share your own unique
        food creations and explore recipes from other passionate cooks.
      </p>
      <Link href="/get-started/login">
        <button className={classes.getStarted}>Get Started</button>
      </Link>
    </div>
  );
}

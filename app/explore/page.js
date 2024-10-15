import classes from './page.module.css';
import PostGrid from "@/components/post-grid";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Explore() {
  return (
    <>
      <Navbar />
      <div className={classes.buttonContainer}> {/* Container for button */}
        <Link href="/new-post">
          <button className={classes.newPost}>Create New Post</button>
        </Link>
      </div>
      <PostGrid />
    </>
  );
}

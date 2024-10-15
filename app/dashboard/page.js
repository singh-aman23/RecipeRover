import Navbar from "@/components/navbar";
import classes from "./page.module.css";
import Link from "next/link";
import DashboardPostGrid from "@/components/dashboard-post-grid";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className={classes.dashboard}>
        <header className={classes.dashboardHeader}>
          <h1>Manage Your Postings</h1>
          <p>Here you can manage your existing postings.</p>
          <Link href="/new-post">
            <button>Create New Post</button>
          </Link>
        </header>
      </div>
      <DashboardPostGrid/>
    </>
  );
}

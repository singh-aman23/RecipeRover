"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const path = usePathname();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <nav className={classes.navbar}>
      <div>
        <Link href="/explore">
          <img src="/logo.png" alt="burger Logo" className={classes.logo} />
        </Link>
      </div>

      <div className={classes.centerLinks}>
        <Link
          href="/explore"
          className={
            path.startsWith("/explore") ? classes.activeLink : classes.navLink
          }
        >
          Explore
        </Link>
        <Link
          href="/dashboard"
          className={
            path.startsWith("/dashboard") ? classes.activeLink : classes.navLink
          }
        >
          Dashboard
        </Link>
      </div>

      <div className={classes.userMenu}>
        <div onClick={toggleDropdown} className={classes.userIcon}>
          <img
            src="/dog.png"
            alt="dog avatar"
            className={classes.userAvatar}
          />
          <span className={classes.username}>AMAN</span>{" "}
        </div>

        {dropdownOpen && (
          <div className={classes.dropdownMenu}>
            <button className={classes.dropdownItem}>Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
}
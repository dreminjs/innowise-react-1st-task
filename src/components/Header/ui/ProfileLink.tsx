import { Link } from "react-router";
import styles from "./Header.module.css";

export const ProfileLink = () => {
  return (
    <Link className={styles.profileLink} to={"/"}>
      Profile
    </Link>
  );
};

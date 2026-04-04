import { Link } from "react-router";
import styles from "./MyProfilePage.module.css";

export const CreatePostLink = () => {
  return (
    <Link to="/posts/create" className={styles.createPostLink}>
      Create Post
    </Link>
  );
};

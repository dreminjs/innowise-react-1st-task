import { FC } from "react";
import { IComment } from "../model/comments.interface";
import styles from "./Comments.module.css";
import { Link } from "react-router";

type TCommentsItemProps = IComment;

export const CommentsItem: FC<TCommentsItemProps> = ({ user, body, likes }) => {
  return (
    <div className={styles.comment}>
      <Link to={`/users/${user.id}`} className={styles.header}>
        <div>
          <p className={styles.commentFullName}>{user.fullName}</p>
          <p className={styles.commentUsername}>@{user.username}</p>
        </div>
      </Link>
      <p className={styles.commentBody}>{body}</p>
      <div className={styles.commentFooter}>
        <span className={styles.commentLikes}>♥ {likes}</span>
      </div>
    </div>
  );
};

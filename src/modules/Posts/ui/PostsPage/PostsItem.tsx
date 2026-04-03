import { FC } from "react";
import { IPost } from "../../model/posts.interfaces";
import styles from "./Posts.module.css";
import { Link } from "react-router";

type TPostsItemProps = IPost;

export const PostsItem: FC<TPostsItemProps> = ({
  title,
  body,
  tags,
  reactions,
  views,
  userId,
}) => {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span>👍</span> {reactions.likes}
          </div>
          <div className={styles.statItem}>
            <span>👁️</span> {views}
          </div>
        </div>
        <Link to={`/users/${userId}`} className={styles.author}>
          Пользователь {userId}
        </Link>
      </div>
    </li>
  );
};

import { FC } from "react";
import { IPost } from "../../../model/posts.interfaces";
import styles from "../Posts.module.css";
import { Link } from "react-router";

type TPostsItemProps = IPost & {
  isAuthor: boolean;
  actions?: React.ReactNode;
};

export const PostsItem: FC<TPostsItemProps> = ({
  title,
  body,
  tags,
  reactions,
  views,
  userId,
  isAuthor,
  actions,
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
        <div className={styles.left}>
          <div className={styles.statItem}>
            <span>👍</span> {reactions.likes}
          </div>
          <div className={styles.statItem}>
            <span>👁️</span> {views}
          </div>
          {actions}
        </div>
        <Link
          to={isAuthor ? `/profile` : `/users/${userId}`}
          className={styles.author}
        >
          {isAuthor ? "Вы" : `Пользователь ${userId}`}
        </Link>
      </div>
    </li>
  );
};

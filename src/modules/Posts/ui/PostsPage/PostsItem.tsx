import { FC } from "react";
import { IPost } from "../../model/posts.interfaces";
import styles from "./Posts.module.css";
import { Link } from "react-router";
import { PostTags } from "@modules/Tags";

type TPostsItemProps = IPost & {
  actions: React.ReactNode | null;
};

export const PostsItem: FC<TPostsItemProps> = ({
  title,
  body,
  tags,
  reactions,
  views,
  userId,
  actions,
  id,
}) => {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <p className={styles.body}>{body}</p>
      <PostTags tags={tags} />

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
          to={actions ? `/profile` : `/users/${userId}`}
          className={styles.author}
        >
          {actions ? "You" : `User ${userId}`}
        </Link>
      </div>
    </li>
  );
};
